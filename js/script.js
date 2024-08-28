 import { aleatorio, nome } from './aleatorio,js';
 import { perguntas } from './perguntas.js';

 const caixaPrincipal = document.querySelector(".caixa-Principal");
 const caixaPerguntas = document.querySelector(".caixa-perguntas");
 const caixaAlternativa = document.querySelector(".caixa-alternativa");
 const caixaResultado = document.querySelector(".caixa-resultado");
 const textoResultado = document.querySelector(".texto-Resultado");
 const botaoJogarNovamente = document.querySelector(".novamento-btn");
 const botaoIniciar = document.querySelector(",iniciar-btn");
 const telaInicial = document.querySelector(".tela-inicial");
  
 let atual = 0;
 let perguntaAtual;
 let historiaFinal = "";

 botaoIniciar.addEventListener('click', iniciaJogo);

 function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.Style.display = 'nome';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
 }

 function mostraPergunta() {
    if (atual >= perguntas.length) {
    }
 }