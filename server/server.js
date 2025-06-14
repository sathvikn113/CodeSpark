import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// Load environment variables


const app = express();


// Middlewares
app.use(cors());
app.use(express.json()); // Parses JSON bodies

// Sample route
app.get('/', (req, res) => {
  res.send('API is running...');
});
const PORT = process.env.PORT || 5000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
