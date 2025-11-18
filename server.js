// server.js
const express = require("express");
const app = express();
app.use(express.json());

let expenses = [];

app.post("/add", (req, res) => {
  const { name, amount } = req.body;
  expenses.push({ name, amount });
  res.json({ message: "Expense added", expenses });
});

app.get("/total", (req, res) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  res.json({ total });
});
app.listen(3000, () => console.log("Expense Calculator running on port 3000"));