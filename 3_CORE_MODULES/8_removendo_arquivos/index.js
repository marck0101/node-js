const fs = require("fs");

fs.unlink("arquivo.txt", function (err) {
  if (err) {
    // para se ter um diagnostico de erro caso venha ocorrer, se não vai direto para a mensagem de sucesso
    console.log(err);
    return; // aqui vai parar a execução do codigo
  }
  console.log("Arquivo removido!");
});
