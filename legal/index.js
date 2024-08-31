import express from 'express';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3001;

// Create Groq client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Endpoint to handle chat completion requests
app.post('/api/ask', async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [{role: 'system', content: 'Provide concise and accurate legal information. Be professional, assertive, and ensure clarity in your responses. Uphold the principles of law and justice while remaining respectful and impartial.'},{ role: 'user', content: question }],
      model: 'llama3-8b-8192',
    });

    res.json({ answer: chatCompletion.choices[0]?.message?.content || 'No content available' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




