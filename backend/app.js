const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const contactRoutes = require("./routes/contact");
const userRoutes = require("./routes/user");
const aboutRoutes = require("./routes/about");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", contactRoutes);
app.use("/api", userRoutes);
app.use("/api", aboutRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
