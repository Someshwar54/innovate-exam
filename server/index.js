// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ ok: true });
});

// ✅ Exam routes
app.post("/exams/start", async (req, res) => {
  const { userId } = req.body;
  res.json({ started: true, userId });
});

app.post("/exams/submit", async (req, res) => {
  const { userId, answers } = req.body;
  res.json({ submitted: true, userId, answers });
});

// ✅ Auth route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  res.json({ loggedIn: true, email });
});

// ✅ Questions route
app.get("/questions", async (req, res) => {
  res.json([
    { id: 1, question: "2+2=?", options: [2, 3, 4, 5], answer: 4 },
    { id: 2, question: "Capital of India?", options: ["Delhi", "Mumbai"], answer: "Delhi" },
  ]);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
