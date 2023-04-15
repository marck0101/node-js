const fs = require("fs");

const arq = "novoarquivo.txt";

fs.stat(arq, (err, stats) => {
  // evidencia erro
  if (err) {
    console.error(err);
    return;
  }

  console.log("isFile", stats.isFile()); // true
  console.log("isDirectory", stats.isDirectory()); // false
  // no LINUX isSymbolicLink seria tipo um atalho
  console.log("isSymbolicLink", stats.isSymbolicLink()); // false
  console.log("stats.ctime", stats.ctime); // 2023-04-15T12:19:08.406Z0
  console.log("stats.size", stats.size); // 0
});
// true
// false
// false
// 2023-04-15T12:19:08.406Z0
// 0
