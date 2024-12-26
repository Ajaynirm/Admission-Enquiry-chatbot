import './App.css'
import Chatbot from './chatbot/Chatbot'
import { Routes,Route,Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import Login from './Login.jsx';

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/chatbot' element={<Chatbot />}/>
        <Route path='/' element={<Login />}/>
        

      </Routes>
      

      <Toaster />
    </>
  )
}

export default App
