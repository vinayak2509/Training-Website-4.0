const express = require("express");
const fs = require("fs");
const router = express.Router();

const aboutMeFilePath = "data/about.json";

const getAboutMeData = () => {
  return JSON.parse(fs.readFileSync(aboutMeFilePath, "utf-8"));
};

router.get("/about", (req, res) => {
  const aboutMeData = getAboutMeData();
  res.status(200).json(aboutMeData);
});

router.post("/about", (req, res) => {
  const newData = req.body;

  if (
    !newData.name ||
    !newData.location ||
    !newData.education ||
    !newData.job ||
    !Array.isArray(newData.hobbies)
  ) {
    return res.status(400).json({ message: "Invalid data" });
  }

  fs.writeFileSync(aboutMeFilePath, JSON.stringify(newData, null, 2));
  res.status(200).json({ message: "About Me details updated successfully!" });
});

module.exports = router;
