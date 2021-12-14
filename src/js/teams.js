import { default as axios } from "axios";

import * as funcion from "./functions";

const div = document.getElementById('columna1');
const div2 = document.getElementById('columna2');
const div3 = document.getElementById('columna3');

document.addEventListener('DOMContentLoaded', async (event) => { 
    const respuestaEscudos = require('./Teams.json');

    for (let i = 0; i < respuestaEscudos.response.length; i++){
        div.insertAdjacentHTML('beforeend', `<div><img id="${respuestaEscudos.response[i].team.id}" src="${respuestaEscudos.response[i].team.logo}"/></div>`);
    }
},

document.addEventListener('click', async (event) => {

    const respuestaJugadores = funcion.mostrarJugadores(event.target.id);

    div2.innerHTML = "";
    for (let i = 0; i < respuestaJugadores.data.response.length; i++) {

        div2.insertAdjacentHTML('beforeend', `<div><img id="${respuestaJugadores.data.response[i].player.id}" src="${respuestaJugadores.data.response[i].player.photo}"/></div>`);                
    }
            
},

document.addEventListener('click', async (event) => {

    const respuestaJugador = await funcion.mostrarInfoJugador(event.target.id);

    div3.innerHTML = "";

    for (let i = 0; i < respuestaJugador.data.response.length; i++) {

        div3.insertAdjacentHTML('beforeend', `<div><img id="${respuestaJugador.data.response[i].player.id}" src="${respuestaJugador.data.response[i].player.photo}"/>
        <div>nom:</div>
        <div>cognom:
        <div>edad:
        </div>
        </div>
        </div>`);                
    }

})),
);