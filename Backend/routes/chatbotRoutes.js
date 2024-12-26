import express from 'express';
import {getChatbotResponse} from '../controller/chatbotController.js'

const router = express.Router();

router.post('/query', getChatbotResponse);

export default router;
