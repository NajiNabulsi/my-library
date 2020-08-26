// module.exports ... to exprot the file (don't forgit)

// npm install express
const express = require("express");
const app = express();
const path = require("path");

// To serve static files such as
// css, about , home ,img, ext....
app.use(express.static(__dirname, "public"));

// middleware fun
const logger = (req, res, next) => {
  // you can do what you need

  next();
};

// init middlewaare
app.use(logger);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");

  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/members", (req, res) => {
  // gets json file
  res.json("jsonFile");
});

app.get("/api/members/:id", (req, res) => {
  // get params
  res.send(req.params.id);
});

app.post("/...", (req, res) => {
  res.send(req.body);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server start on port ${port}`));
