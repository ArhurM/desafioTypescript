//somar
const button = document.getElementById('button'); 
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');


function somar(numero1, numero2) {
    if(typeof numero1 === 'number' && typeof numero2 === 'number'){
        return numero1 + numero2;
    } else {
        return Number(numero1) + Number(numero2);
    }
        
    }

button.addEventListener('click', () => {
    console.log(somar(input1.value, input2.value));
}); 


//desadio Saldo
"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0;

function somarAoSaldo(soma) {
    campoSaldo.innerHTML = `${Number(campoSaldo.innerHTML ) + soma}`;
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
    soma.value = "";
}

botaoAtualizar.addEventListener("click", () => {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener("click", () => {
    limparSaldo();
});

