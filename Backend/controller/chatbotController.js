import axios from 'axios';

export const getChatbotResponse = async (req, res) => {
  const { query } = req.body;
  try {
    const response = await axios.post('http://127.0.0.1:5000/query', { query });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Chatbot service is down' });
  }
};
