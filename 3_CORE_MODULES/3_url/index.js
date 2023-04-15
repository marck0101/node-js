const url = require("url");
const address = "https://www.meusite.com.br/catalogo?produtos=cadeira";
const parsedUrl = new url.URL(address);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
// chama produto(cadeira) atraves da chave url(produtos)
console.log(parsedUrl.searchParams.get("produtos"));
