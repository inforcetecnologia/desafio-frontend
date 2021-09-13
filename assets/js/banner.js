var imagens = ["https://labs.inforcedata.com.br/desafio-frontend/banner/banner2.jpg","https://labs.inforcedata.com.br/desafio-frontend/banner/banner1.jpg"];
var imagematual = 0;

function trocaimagem() {
 imagematual = (imagematual + 1) % 2;
document.querySelector('.gif img'). src = imagens[imagematual];
}
setInterval(trocaimagem, 2500);