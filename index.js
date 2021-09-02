require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const server = express();

server.use(express.json());
server.use(cors());

const users = [
  {
    name: "Josh",
    password: "FakePassword",
  },
  { name: "Jordan", password: "2ndFakePassword" },
  { name: "Bradford", password: "3rdFakePassword" },
];

server.get("/api/users", (req, res) => {
  res.json(users);
});

server.use("*", (req, res) => {
  res.send("<h1>Hello, gamers!</h>");
});

server.use((err, req, res, next) => {
  //eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
