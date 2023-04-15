const http = require("http"); // importo o http

const port = 3000; // crio uma porta

// vai escrever uma resposta para o usuário e finalizo ela
const server = http.createServer((req, res) => {
  res.write("Oi HTTP");
  res.end();
});
// para conseguir executar tudo, preciso 'escutar a porta
server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
