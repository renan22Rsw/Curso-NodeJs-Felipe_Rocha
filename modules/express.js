const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "src/views");

//Middlewares

app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

const PORT = 8080;

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Home Page<h1/>");
});

//ejs library

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", { users });
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

//deleteUserById

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.listen(PORT, () => console.log(`rodando com express na porta: ${PORT}`));
