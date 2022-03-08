//Início - Player de Música
let musicas = [
    {titulo:'This Little Light of Mine', artista:'Es Jammy Jams', src:'..\music\Everything Has a Beginning - Joel Cummins.mp3', img:'..\img\jazz-blues.jpg'},
]

let musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

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
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+ ':' +campoSegundos;
}

//Fim - Player de Música

