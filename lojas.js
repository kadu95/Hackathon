const slides = document.querySelectorAll('.slides img');
const botaoAnterior = document.querySelector('.botao-anterior');
const botaoProximo = document.querySelector('.botao-proximo');
let indiceAtual = 0;

slides[indiceAtual].classList.add('ativo');

botaoAnterior.addEventListener('click', () => {
 slides[indiceAtual].classList.remove('ativo');
 indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
 slides[indiceAtual].classList.add('ativo');
});

botaoProximo.addEventListener('click', () => {
 slides[indiceAtual].classList.remove('ativo');
 indiceAtual = (indiceAtual + 1) % slides.length;
 slides[indiceAtual].classList.add('ativo');
});

setInterval(() => {
 slides[indiceAtual].classList.remove('ativo');
 indiceAtual = (indiceAtual + 1) % slides.length;
 slides[indiceAtual].classList.add('ativo');
}, 5000);
