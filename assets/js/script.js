let musica = document.querySelector('audio');

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica)

// Funcções
function tocarMusica(){
    musica.play();
    document.querySelector('div .botao-pause').style.display = 'block';
    musica.play();
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('div .botao-pause').style.display = 'none';
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
}