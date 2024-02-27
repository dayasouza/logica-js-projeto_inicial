
alert('Boas-vindas ao jogo do Número Secreto');
let numeroSecreto = parent(Math.random() * 10 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
        break;
        
    } else{
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
            //alert('Você errou :(');
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }

        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
/*
if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
*/