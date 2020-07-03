document.addEventListener("DOMContentLoaded", function(e) {

    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = ['#60d394', '#d36060', '#c060d3', '#d3d160', '#6860d3', '#60b2d3'];


    pads.forEach((pad, i) => {
        pad.addEventListener('click', function() {
            // Nos permite apretar cuantas veces queramos el pad y que arranque de cero el sonido.
            sounds[i].currentTime = 0;
            // reproduce el sonido dependiendo que pad apretamos en nuestro arreglo
            sounds[i].play();

            createEffect(i);
        })
    });

    const createEffect = (i) => {
        const effect = document.createElement('div');
        visual.appendChild(effect);
        effect.style.backgroundColor = colors[i];
        effect.style.animation = `jump 1s ease`;

        // kill each bubble
        //'animationend' -> CSS Animation finish.
        effect.addEventListener('animationend', function() {
            visual.removeChild(this);
        })
    }

});