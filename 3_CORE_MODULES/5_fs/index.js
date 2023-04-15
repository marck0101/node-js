const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  // vamos ler o arquivo, vamos citar o arquivo que vai ler
  fs.readFile("mensagem.html", function (err, data) {
    // função anônima que posso ter um erro ou receber os dados do arquivo
    res.writeHead(200, { "Content-Type": "text/html" }); // aqui vou escrever o HEAD em caso de sucesso, mudar o type para text/html
    res.write(data); // ao invés de reinderizar o html na mão, eu reinderizo o data que é o HTML
    return res.end(); // fim da requisição
  });
});

server.listen(port, () => {
  // aqui para ficar 'ouvindo a porta'
  console.log(`Servidor rodando na porta: ${port}`);
});
