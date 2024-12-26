import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./chatbot.css";
import userImage from "../assets/user.png";
import botImage from "../assets/robot.png";

const Chatbot = () => {
  const [response, setResponse] = useState("");
  const [messages, setMessages] = useState([{ type: "server", text: "Hi! How can i help you" }]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages((prev) => [
        ...prev,
         { type: "user", text: input }
  ]);
    try {
        const query = input;
        setLoading(true);
      const { data } = await axios.post(
        "http://localhost:3000/api/chatbot/query",
        { query }
      );
      setResponse(data.message);
      console.log(data.message)
      setMessages((prev) => [
        ...prev,
        { type: "server", text: data.message },
      ]);
    } catch (err) {

      setResponse("Error: Unable to fetch response");
      setMessages((prev) => [
        ...prev,
        { type: "server", text: 'unable to process' },
      ]);
    }
    setLoading(false);
    setInput("");
    
  };

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { type: "user", text: input }]);
    
    

    setInput("");
  };

  return (
    <>
      <div className="main-container">
        <h1>Admission Enquiry Chatbot</h1>

        <div className="chatbox-container">
          <div className="chatbox-messages">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbox-message ${
                  msg.type === "user" ? "user-message" : "server-message"
                }`}
              >
                <div className="chatbox-icon">
                  <img
                    src={msg.type === "user" ? userImage : botImage}
                    alt="icon"
                  />
                </div>
                <div className="chatbox-text">{msg.text}</div>
              </div>
            ))}
            <div ref={chatEndRef}></div>
          </div>
          <div className="chatbox-input-container">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            />
            <button onClick={handleSubmit}>Send</button>
          </div>
        </div>
        {/* <div className='chat-box'>box</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask something..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div> */}
      </div>
    </>
  );
};

export default Chatbot;
