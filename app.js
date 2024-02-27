alert('Boas-vindas ao jogo do Número Secreto');
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else{
    alert('O numero secreto era ' + numeroSecreto + ', mas você escolheu ' + chute);
    //alert('Você errou :(');
}



