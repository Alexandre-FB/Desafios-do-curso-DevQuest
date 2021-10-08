function somar (numero1 = 0, numero2 = 0) {
    return "A soma de " + numero1 + " e " + numero2 + " é " + (numero1 + numero2);
}

function subtrair (numero1 = 0, numero2 = 0) {
    return "A subtração de " + numero1 + " e " + numero2 + " é " + (numero1 - numero2);
}

function dividir (numero1 = 0, numero2 = 0) {
    return "A divisão de " + numero1 + " por " + numero2 + " é " + (numero1 / numero2);
}

function multiplicar (numero1, numero2) {
    return "A multiplicação de " + numero1 + " por " + numero2 + " é " + (numero1 * numero2);
}

let soma = somar(9, 3);
let subtracao = subtrair(5, 2);
let divisao = dividir(150, 5);
let multiplicacao = multiplicar(2, 7);

console.log(soma);
console.log(subtracao);
console.log(divisao);
console.log(multiplicacao);