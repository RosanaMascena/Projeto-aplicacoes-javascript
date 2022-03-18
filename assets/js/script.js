let musicas = [
    {titulo:'This Little Light of Mine', artista:'Es Jammy Jams', src:'..\music\This Little Light of Mine - Es Jammy Jams.mp3', img:'..\img\jazz-blues.jpg'},
    {titulo:'Everything Has a Beginning', artista:'Joel Cummins', src:'..\music\Everything Has a Beginning - Joel Cummins.mp3', img:'..\img\cinema.jpg'},
    {titulo:'Communicator', artista:'Reed Mathis', src:'..\music\Communicator - Reed Mathis.mp3', img:'..\img\country.jpg'},
];

let musica = document.querySelector('audio');
let indexMusica = 0;
renderizarMusica(indexMusica);

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('div .botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
});

// Funcções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('div .botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('div .botao-pause').style.display = 'none';
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
