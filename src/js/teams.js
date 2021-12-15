import { default as axios } from "axios";

import * as funcion from "./functions";

const div = document.getElementById('columna1');
const div2 = document.getElementById('columna2');
const div3 = document.getElementById('columna3');
let jugadoresFav = [];


document.addEventListener('DOMContentLoaded', async (event) => { 

    const respuestaEscudos = await funcion.escudos();

    for (let i = 0; i < respuestaEscudos.response.length; i++){
        div.insertAdjacentHTML('beforeend', `<div><img id="${respuestaEscudos.response[i].team.id}" src="${respuestaEscudos.response[i].team.logo}"/></div>`);
    }
},

document.addEventListener('click', async (event) => {

    const respuestaJugadores = await funcion.mostrarJugadores();

    div2.innerHTML = "";
    for (let i = 0; i < respuestaJugadores.length; i++) {
        div2.insertAdjacentHTML('beforeend', `<div><img id="${respuestaJugadores[i].player.id}" src="${respuestaJugadores[i].player.photo}"/></div>`);                
    }
            
},

div2.addEventListener('click', async (event) => {

    const respuestaJugador = await funcion.mostrarInfoJugador(event.target.id);
    let estrellaEncontrada = false;

    for (let i = -1; i < jugadoresFav.length; i++) {
        if(respuestaJugador.player.name === jugadoresFav[i]) {
            div3.innerHTML = "";
            div3.insertAdjacentHTML('beforeend', `<div><img src="${respuestaJugador.player.photo}"/>
            <div>nom: ${respuestaJugador.player.name}</div>
            <div>edad: ${respuestaJugador.player.age}</div>
            <div><img id="star" src="https://www.pngmart.com/files/1/3D-Gold-Star-PNG-File.png" width="40"</div>
            </div>
            </div>`);
            estrellaEncontrada = true;
            break;
        } else {
            div3.innerHTML = "";
            div3.insertAdjacentHTML('beforeend', `<div><img src="${respuestaJugador.player.photo}"/>
            <div>nom: ${respuestaJugador.player.name}</div>
            <div>edad: ${respuestaJugador.player.age}</div>
            <div><img id="star" src="https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png" width="40"</div>
            </div>
            </div>`);
            estrellaEncontrada = false;
        }
    }    

    const star = document.getElementById('star');

    star.addEventListener('click', (event) => {

        let jugadorFav = respuestaJugador.player.name;    

        if (!estrellaEncontrada) {
            
            event.target.src = 'https://www.pngmart.com/files/1/3D-Gold-Star-PNG-File.png';
            jugadoresFav.push(jugadorFav);
            window.localStorage.setItem('JugadoresFav', JSON.stringify(jugadoresFav));
            
        } else {
            console.log("ahora esta en blanco y se quita");
            event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png';
        }
    
        
    })

}))

);

