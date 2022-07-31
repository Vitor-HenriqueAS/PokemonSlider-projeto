const btnVoltar = document.getElementById('btn-voltar');
const btnAvancar = document.getElementById('btn-avancar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartal){
    cartoes[indiceCartal].classList.add('selecionado');
}

//Botão Voltar
btnVoltar.addEventListener('click', function(){
    if(cartaoAtual === 0) return

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})

//Botão Avançar
btnAvancar.addEventListener('click', function(){
    if(cartaoAtual === cartoes.length - 1) return

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
})