const prompt = require("prompt-sync")();

console.log("--- Calculadora Simples ---");

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let operador = prompt("Digite a operação (+, -, *, /): ");
let num2 = parseFloat(prompt("Digite o segundo número: "));

let resultado;

switch (operador) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {
      resultado = "Erro: divisão por zero!";
    }
    break;
  default:
    resultado = "Operador inválido!";
}

console.log(`Resultado: ${resultado}`);
