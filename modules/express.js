const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json());

const PORT = 8080;

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Home Page<h1/>");
});

app.post("/users", async (req, res) => {
  if (res.status(200)) {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } else {
    res.send("Ocorreu um error ao fazer a requisição!");
  }
});

app.get("/users", async (req, res) => {
  if (res.status(200)) {
    const users = await UserModel.find({});
    res.json(users);
  } else if (res.status(500)) {
    res.send("Ocorreu um error ao fazer a requisição!");
  }
});

app.listen(PORT, () => console.log(`rodando com express na porta: ${PORT}`));
