const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200 // acessado com sucesso
  res.setHeader('Content-Type', 'text/html') // mudando o tipo de conteudo
  //ao invés mandar texto puro, vamos mandar html para reinderizar na tela
  res.end('<h1>Ola, este e o meu primeiro server!</h1>')
})

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
