const http = require("http");

const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("<h1>Home Page</h1>");
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "Renan",
        email: "renanvitor@gamil.com",
      },

      {
        name: "Nath",
        email: "nathzinha@gmail.com",
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(PORT, () => console.log(`Rodando na porta:${PORT} `));
