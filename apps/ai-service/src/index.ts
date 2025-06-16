import express from 'express';

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'MetaTask AI Service API' });
});

// Placeholder for AI matching endpoint
app.post('/api/match', (req, res) => {
  // This would be replaced with actual AI model inference
  res.json({
    message: 'AI matching service placeholder',
    matches: [
      { id: '1', score: 0.95 },
      { id: '2', score: 0.85 },
      { id: '3', score: 0.75 },
    ]
  });
});

// Placeholder for credibility scoring endpoint
app.post('/api/score', (req, res) => {
  // This would be replaced with actual AI model inference
  res.json({
    message: 'Credibility scoring service placeholder',
    score: 0.85,
  });
});

app.listen(port, () => {
  console.log(`🧠 AI Service running on port ${port}`);
}); 