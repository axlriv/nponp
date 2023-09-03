const imagenContainer = document.getElementById('imagen');
const audio = document.getElementById('audio');

let clicActual = 0;
const imagenes = ['image/sffvs-removebg-preview (1).png', 'image/efcsdc-removebg-preview (3).png'];

imagenContainer.addEventListener('click', () => {
    clicActual = (clicActual + 1) % imagenes.length;
    const nuevaImagen = imagenes[clicActual];
    document.getElementById('imagen').src = nuevaImagen;

    if (clicActual === 1) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
});



