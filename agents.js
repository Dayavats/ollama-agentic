import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/ask', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'tinyllama',
      prompt,
      stream: false
    });

    res.json({ reply: response.data.response });
  } catch (err) {
    res.status(500).json({ error: 'Failed to talk to Ollama' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Agentic AI server running at http://localhost:${port}`);
});
