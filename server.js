const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/test", (req, res) => {
  res.send("<p>Success!</p>");
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
