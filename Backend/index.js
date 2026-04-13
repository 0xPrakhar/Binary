import express from 'express';
import cors from 'cors';
const app = express();


// Middleware
app.use(express.json()); // allows JSON data
app.use(cors({
  origin: "http://localhost:5173", // 👈 your Vite frontend
  methods: ["GET", "POST"],
  credentials: true
}));

app.get('/api/test', (req, res) => {
 res.json({ message: " HELLO FROM BACKEND" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});