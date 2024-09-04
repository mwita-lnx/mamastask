import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { name, password } = req.body;

  // Hardcoded credentials
  const validName = 'testuser';
  const validPassword = 'password123';

  if (name === validName && password === validPassword) {
    res.json({ name });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
