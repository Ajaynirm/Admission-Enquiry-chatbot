import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import chatbotRoutes from './routes/chatbotRoutes.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI || "mongodb+srv://ajaysam397:ajaj@cluster0.edjr7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Routes
app.use('/api/chatbot', chatbotRoutes);

const PORT =  3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
