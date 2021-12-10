import { default as axios } from "axios";
const div = document.getElementById('columna1');
const div2 = document.getElementById('columna2');
const div3 = document.getElementById('columna3');

async function escudos(){
    try{                                
        const response = await axios.get('https://v3.football.api-sports.io/teams?country=Spain&league=140&season=2020',{
            headers: {
                'x-rapidapi-key': 'fa1496de590f880ae028590f4af4588b',
                'x-rapidapi-host': 'v3.football.api-sports.io'
            },
        });
        if (response.status === 200){
            return response.data;
        }
    } catch (err) {
        console.log(err);
    }
};

document.addEventListener('DOMContentLoaded', async (event) => { 
    event.preventDefault();
    const respuestaEscudos = await escudos();

    for (let i = 0; i < respuestaEscudos.response.length; i++){
        div.insertAdjacentHTML('beforeend', `<div><img id="${respuestaEscudos.response[i].team.id}" src="${respuestaEscudos.response[i].team.logo}"/></div>`);
    }
},

document.addEventListener('click', async (event) => {
    event.preventDefault();

    const respuestaJugadores = await axios.get(`https://v3.football.api-sports.io/players?season=2020&team=${event.target.id}`,{
        headers: {
            'x-rapidapi-key': 'fa1496de590f880ae028590f4af4588b',
            'x-rapidapi-host': 'v3.football.api-sports.io'
        },
    });


    for (let i = 0; i < respuestaJugadores.data.response.length; i++) {

        div2.insertAdjacentHTML('beforeend', `<div><img id="${respuestaJugadores.data.response[i].player.id}" src="${respuestaJugadores.data.response[i].player.photo}"/></div>`);                
    }
            
},

document.addEventListener('click', async (event) => {
    event.preventDefault();

    const respuestaJugador = await axios.get(`https://v3.football.api-sports.io/players?season=2020&id=${event.target.id}`, { 

        headers: {
            'x-rapidapi-key': 'fa1496de590f880ae028590f4af4588b',
            'x-rapidapi-host': 'v3.football.api-sports.io'
        },

    });

    for (let i = 0; i < respuestaJugador.data.response.length; i++) {

        div3.insertAdjacentHTML('beforeend', `<div><img id="${respuestaJugador.data.response[i].player.id}" src="${respuestaJugador.data.response[i].player.photo}"/></div>`);                
    }

})),
);