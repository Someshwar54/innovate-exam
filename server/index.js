import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ ok: true });
});

// 👇 Add this
app.post("/exams/start", (req, res) => {
  const { userId } = req.body;
  res.json({ started: true, userId });
});

app.post("/exams/submit", (req, res) => {
  const { userId, answers } = req.body;
  res.json({ submitted: true, userId, answers });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.json({ loggedIn: true, email });
});

app.get("/questions", (req, res) => {
  res.json([
    { id: 1, question: "2+2=?", options: [2, 3, 4, 5] },
    { id: 2, question: "Capital of India?", options: ["Delhi", "Mumbai"] },
  ]);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});