const path = require("path");

const customPath = "/relatorios/marcos/relatorio1.pdf";

console.log("dirname", path.dirname(customPath));
console.log("basename", path.basename(customPath));
console.log("extname", path.extname(customPath));

// /relatorios/marcos
// relatorio1.pdf
// .pdf
