const express = require("express");
const fs = require("fs");

const router = express.Router();

const users = JSON.parse(fs.readFileSync("data/users.json", "utf-8"));

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).json({ message: "Login successful", role: user.role });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

module.exports = router;
