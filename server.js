const express = require("express");
const cors = require("cors");

//inorder to read .env
// require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/testing", (req, res) => {
  res.send({ message: "Nice to meet you babe" });
});

app.get("/", (req, res) => {
  res.send("welcome to the home page babe");
});

app.listen(port, () => {
  console.log("server listen 3000");
});
