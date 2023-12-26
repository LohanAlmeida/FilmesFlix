function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value;
  var elementoListaFilmes = document.getElementById('listaFilmes');
  
  var regex = /\.(jpg|jpeg|png|gif)$/i;
  
  if (regex.test(filmeFavorito)) {
    var videoId = extrairVideoId(filmeFavorito); // Extrair o ID do vídeo do YouTube da URL
    var imagemFilme = '<a href="https://www.youtube.com/watch?v=' + videoId + '" target="_blank"><img src=' + filmeFavorito + '></a>';
    elementoListaFilmes.innerHTML += imagemFilme;
    document.getElementById('filme').value = '';
  } else {
    alert('Por favor, insira um endereço de imagem válido!');
  }
}

function extrairVideoId(url) {
  var videoId = '';
  var match = url.match(/[?&]v=([^&#]+)/);
  if (match) {
    videoId = match[1];
  }
  return videoId;
}

var jokerImagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/6/63/Joker_%282019%29.jpg/250px-Joker_%282019%29.jpg"
var jokerTrailer = "https://youtu.be/jfVTJm9NilA?si=k412HGDVemcpYpFj";
var jokerFilme = '<a href="' + jokerTrailer + '" target="_blank"><img src="' + jokerImagem + '"></a>';
document.getElementById('listaFilmes').innerHTML += jokerFilme;

var deadPoolImagem = "https://upload.wikimedia.org/wikipedia/pt/3/3b/Deadpool_2016.jpg";
var deadPoolTrailer = "https://youtu.be/IDiO2qc2T18?si=eZMC05peI1eFKeOy";
var deadPoolFilme = '<a href="' + deadPoolTrailer + '" target="_blank"><img src="' + deadPoolImagem + '"></a>';
document.getElementById('listaFilmes').innerHTML += deadPoolFilme;

var JohnWickImagem = "https://images.justwatch.com/poster/304815974/s718/john-wick-chapter-4.jpg";
var JohnWickTrailer = "https://youtu.be/gZtmzT9Wgrw?si=ZoBWAtyF-18FKEql";
var JohnWickFilme = '<a href="' + JohnWickTrailer + '" target="_blank"><img src="' + JohnWickImagem + '"></a>';
document.getElementById('listaFilmes').innerHTML += JohnWickFilme;

var senhorDosAneisImagem = "https://musicart.xboxlive.com/7/428f5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
var senhorDosAneisTrailer = "https://youtu.be/LiKeQrChkTY?si=ud1NgzeENEt0fMj8";
var senhorDosAneisFilme = '<a href="' + senhorDosAneisTrailer + '" target="_blank"><img src="' + senhorDosAneisImagem + '"></a>';
document.getElementById('listaFilmes').innerHTML += senhorDosAneisFilme;

var escolaDeRockImagem = "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg"
var escolaDeRockTrailer = "https://youtu.be/5afGGGsxvEA?si=S1gBo8C2qdgpA8Y6";
var escolaDeRockFilme = '<a href="' + escolaDeRockTrailer + '" target="_blank"><img src="' + escolaDeRockImagem + '"></a>';
document.getElementById('listaFilmes').innerHTML += escolaDeRockFilme;

var harryPotterImagem = "https://upload.wikimedia.org/wikipedia/pt/1/1d/Harry_Potter_Pedra_Filosofal_2001.jpg";
var harryPotterTrailer = "https://www.youtube.com/watch?v=VyHV0BRtdxo&pp=ygUnaGFycnkgcG90dGVyIGVhIHBlZHJhIGZpbG9zb2ZhbCB0cmFpbGVy";
var harryPotterFilme = '<a href="' + harryPotterTrailer + '" target="_blank"><img src="' + harryPotterImagem + '"></a>';
document.getElementById('listaFilmes').innerHTML += harryPotterFilme;
