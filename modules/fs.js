const path = require("path");
const fs = require("fs");

//Esse modulo server para manipular modulo de arquivos

//Criar Pastas

fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    console.log("Error:", error);
  }

  console.log("Pasta Criada com sucesso!");
});

//Criar Arquivos

fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Error:", error);
    }

    console.log("arquivo criado com sucesso!");
  }
);

//Ler um arquivo

fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      return console.log("Error:", error);
    }

    console.log(data);
  }
);

//Adicionar a um Arquivo

fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello World",
  (error) => {
    if (error) {
      return console.log("Error", error);
    }

    console.log("Arquivo adicionado com sucesso");
  }
);
