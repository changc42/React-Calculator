const express = require("express");
const path = require("path");
const port = 5000;
const app = express();

app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
