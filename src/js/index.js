import axios from 'axios';
const Swal = require('sweetalert2')
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
