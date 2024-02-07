let listaDeNumerosSorteados = [];
let limiteNumbers = 10;
let numberSecret = gerarNumero();
let tentativas = 1;


function exibirTextoTela(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, 'UK English Female', {rate:1.2});
}

function mensagemInicial(){
exibirTextoTela('h1','Misterious Number Game');
exibirTextoTela('p','Choose a number between 1 and 10')
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numberSecret) {
        exibirTextoTela('h1', 'Correct Number. Congratulations ✨ !');
        let palavraTentativa = tentativas > 1 ? 'attempts' : 'attempt'
        let mensagemTentativas = `You got the secret number right, with ${tentativas} ${palavraTentativa} `;
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute>numberSecret) {
            exibirTextoTela('p','Secret Number is smaller');
        }else{
            exibirTextoTela('p','Secret Number is biger');
        }

        tentativas++;
        limparCampo();
    }
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * limiteNumbers + 1);
    let qtdDeElementosList = listaDeNumerosSorteados.length;
    
    if (qtdDeElementosList == limiteNumbers) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numberSecret = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}