const fs = require("fs");

if (!fs.existsSync("./minhapasta")) {
  // se o diretório não existir
  console.log("Não existe");
  fs.mkdirSync("minhapasta"); // aqui vai criar a pasta
} else if (fs.existsSync("minhapasta")) {
  console.log("Existe");
}
