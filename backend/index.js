const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./src/routes/auth");

const app = express();
app.use(bodyParser.json());

// routes
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
