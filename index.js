const prompt = require("prompt-sync")();

console.log("--- Calculadora Simples ---");

//Inserindo Números e operador númerico
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let operador = prompt("Digite a operação (+, -, *, /): ");
let num2 = parseFloat(prompt("Digite o segundo número: "));

let resultado;

//Utilizando o Swtch para fazer as operações matematicas
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
    //Se o divisor for zero ele imprime uma mensagem avisando que não tem como dividir por zero 
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
