let musica = document.querySelector('audio');

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
}

