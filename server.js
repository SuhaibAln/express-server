"use strict";

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/person", (req, res) => {
  const { person } = req.body;

  res.status(200).json({
    name: person.name,
    age: Number(person.age) + 5,
    gender: person.gender,
  });
});

const start = (port) => {
  app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  });
};

module.exports = {
  app: app,
  start: start,
};