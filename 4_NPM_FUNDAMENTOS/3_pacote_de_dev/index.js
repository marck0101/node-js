const _ = require("lodash");
const chalk = require("chalk");

const a = [1, 2, 3];
const b = [4, 5, 6];
// método para verificar a diferença entre dois arrays
const diff = _.merge(a, b);

console.log(chalk.red.bold(diff));
