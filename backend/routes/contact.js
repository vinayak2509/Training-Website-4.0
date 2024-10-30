const express = require("express");
const { validationRules } = require("../middleware/validation");
const { body, validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataFilePath = path.join(__dirname, "../data/contactData.json");

router.post("/contact", validationRules, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("Validation errors:", JSON.stringify(errors.array(), null, 2));
    return res.status(400).json({ errors: errors.array() });
  }

  const formData = req.body;

  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    const existingData = data ? JSON.parse(data) : [];

    existingData.push(formData);

    fs.writeFile(dataFilePath, JSON.stringify(existingData, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }

      console.log("Form submitted:", formData);
      res.status(200).json({ message: "Form submitted successfully!" });
    });
  });
});

router.get("/contact", (req, res) => {
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    const existingData = data ? JSON.parse(data) : [];
    res.status(200).json(existingData);
  });
});

module.exports = router;
