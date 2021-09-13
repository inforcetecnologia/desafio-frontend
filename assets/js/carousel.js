
let slidePosicao = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    proximoSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    slideAnterior();
  });

function atualizacaoSlidePosicao() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosicao].classList.add('carousel__item--visible');
}

function proximoSlide() {
  if (slidePosicao === totalSlides - 1) {
    slidePosicao = 0;
  } else {
    slidePosicao++;
  }

 atualizacaoSlidePosicao();
}

function slideAnterior() {
  if (slidePosicao === 0) {
    slidePosicao = totalSlides - 1;
  } else {
    slidePosicao--;
  }

 atualizacaoSlidePosicao();
}
