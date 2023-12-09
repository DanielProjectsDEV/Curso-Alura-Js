const idadeMinima = 18;
const { Readline } = require("readline/promises");
var idadeCliente = require ("redline")

const rl = Readline.createInterFace({
    input: process.stdin,
    output: process.stdout
});
rl.question('Qual sua Idade?')
if (idadeCliente >= idadeMinima) {
  console.log("cerveja")
} else {
  console.log("suco")
}

//condição     //true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")