const url = require("url");
const address = "https://www.meusite.com.br/catalogo?produtos=cadeira";
const parsedUrl = new url.URL(address);

console.log("host", parsedUrl.host); // www.meusite.com.br
console.log("pathname", parsedUrl.pathname); // /catalogo
console.log("search", parsedUrl.search); // ?produtos=cadeira
console.log("searchParams", parsedUrl.searchParams); // URLSearchParams { 'produtos' => 'cadeira' }
// chama produto(cadeira) atraves da chave url(produtos)
console.log("produtos", parsedUrl.searchParams.get("produtos")); // produtos cadeira

// host www.meusite.com.br
// pathname /catalogo
// search ?produtos=cadeira
// searchParams URLSearchParams { 'produtos' => 'cadeira' }
// produtos cadeira
