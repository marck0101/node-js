const http = require("http");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  var urlInfo = require("url").parse(req.url, true); // para obter qual URL estou recebendo
  const name = urlInfo.query.name; // estou buscando o parâmetro name da URL que estou recebendo

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (!name) {
    res.end(
      // enviando HTML para o usuário
      "<h1>Preencha seu nome:</h1><form method='GET'><input type='text' name='name'/><input type='submit' value='Enviar'></form>"
    );
  } else {
    res.end(`<h1>Seja bem-vindo ${name}!</h1>`);
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
