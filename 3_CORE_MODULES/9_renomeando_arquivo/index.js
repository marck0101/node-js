const fs = require("fs");
const arqAntigo = "arquivo.txt";
const novoArq = "novoarquivo.txt";

// ordem dos argumentos, nome do antigo, novo nome
fs.rename(arqAntigo, novoArq, function (err) {
  // evidencia algum possível erro
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Arquivo ${arqAntigo} renomeado para ${novoArq}!`);
});
