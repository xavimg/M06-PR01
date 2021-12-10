<<<<<<< HEAD
import axios from 'axios';
const Swal = require('sweetalert2')

//const express = require('express')
//const app = express()


const postRequest = async () => {

    const URL = "https://jsonplaceholder.typicode.com/users"

    try {

        const response = await axios.post(URL, {
            
            usuario: document.getElementById('usuario').value,
            email: document.getElementById('email').value,
            contraseña: document.getElementById('contraseña').value,
            contraseña2: document.getElementById('contraseña2').value

        });

    
    if ( response.status === 201 ) {

    return {status: 201, data: response.data, message: Swal.fire(
        'Registrado correctamente',
        'Redirigiendo a las plantillas de los equipos...'
    )};

    }
    
    } catch (error) {

        return console.log(error);
    }
}

const form = document.querySelector('form');
const div = document.getElementById('response');

form.addEventListener('submit', async (event, res) => {
    event.preventDefault();

    const respuesta = await postRequest();

    if ( respuesta.status === 201 ) {

        console.log(respuesta.message);
        sessionStorage.setItem = respuesta.data.id;
        
        setTimeout(() => { window.location = '/escudos.html' },
        2500);

        return div.insertAdjacentHTML('beforeend', `<h1> ${ respuesta.message } </h1>`);
    }

})
=======
async function calltest(){
try{                                //fetcheamos el api con un Post, y le decimso que queremos el contet como json
    const respuesta = await fetch('https://v3.football.api-sports.io/teams/statistics?season=2019&team=33&league=39',{
        method: 'GET',
        headers: {
            'x-rapidapi-key': '7faf4ccce2da932aa11c51f6a71d1d83',
            'x-rapidapi-host': 'v3.football.api-sports.io'
        },
    })
    if (respuesta.status === 200){
        const responseJSON = await respuesta.json(); //EL RESPONSE QUE HEM POSSAT ABANS^^^^^^, amb tot agrupat
        console.log(responseJSON.response.cards);
        return {status: true, data: respuesta}; //RETORNEM EL OBJETCTE 
    }
}catch (err) {
    console.log(err.message);
    return {status: false, msg: err.message};
}
}
calltest();
>>>>>>> 532d433f84ab03873aa57323233b52dae5d9d616
