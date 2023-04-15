const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  var urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (!name) {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    // quando receber um nome vou passar para um arquivo(arquivo.txt)
    fs.writeFile("arquivo.txt", name, function (err, data) {
      // quando o arquivo for escrito posso executar algo
      res.writeHead(302, {
        // 302 é um status redirect
        Location: "/", // depois de submeter o formulário, neste caso vai mandar o usuário para "/"
      });
      return res.end(); // fim da requisição
    });
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
