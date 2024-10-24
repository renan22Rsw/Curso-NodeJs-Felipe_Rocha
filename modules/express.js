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
  try {
    const user = await UserModel.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const user = await UserModel.find({});
    res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//getUserById

app.get("/users/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//updateUserById

app.patch("/users/:id", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.listen(PORT, () => console.log(`rodando com express na porta: ${PORT}`));
