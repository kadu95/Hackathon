const Slides = document.querySelectorAll('.Slide');
const indicadores = document.querySelectorAll('.indicador');
const botaoAnterior = document.querySelector('.botao-anterior');
const botaoProximo = document.querySelector('.botao-proximo');
let indiceAtual = 0;

Slides[indiceAtual].classList.add('ativo');
indicadores[indiceAtual].classList.add('ativo');

botaoAnterior.addEventListener('click', () => {
  Slides[indiceAtual].classList.remove('ativo');
  indicadores[indiceAtual].classList.remove('ativo');
  indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
  Slides[indiceAtual].classList.add('ativo');
  indicadores[indiceAtual].classList.add('ativo');
});

botaoProximo.addEventListener('click', () => {
  Slides[indiceAtual].classList.remove('ativo');
  indicadores[indiceAtual].classList.remove('ativo');
  indiceAtual = (indiceAtual + 1) % slides.length;
  Slides[indiceAtual].classList.add('ativo');
  indicadores[indiceAtual].classList.add('ativo');
});

indicadores.forEach((indicador, indice) => {
  indicador.addEventListener('click', () => {
    Slides[indiceAtual].classList.remove('ativo');
    indicadores[indiceAtual].classList.remove('ativo');
    indiceAtual = indice;
    Slides[indiceAtual].classList.add('ativo');
    indicadores[indiceAtual].classList.add('ativo');
  });
});

setInterval(() => {
  Slides[indiceAtual].classList.remove('ativo');
  indicadores[indiceAtual].classList.remove('ativo');
  indiceAtual = (indiceAtual + 1) % slides.length;
  Slides[indiceAtual].classList.add('ativo');
  indicadores[indiceAtual].classList.add('ativo');
}, 5000);