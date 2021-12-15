import { default as axios } from "axios";

export async function escudos(){
    try{ 
        const responseJson = require('./Teams.json');

        // const response = await axios.get('https://v3.football.api-sports.io/teams?country=Spain&league=140&season=2020',{
        //     headers: {
        //         'x-rapidapi-key': 'caa4dd3a7fb198c86c5537dda4122a1a',
        //         'x-rapidapi-host': 'v3.football.api-sports.io'
        //     },
        // });

        // if (response.status === 200){
            return responseJson;
        // }

    } catch (err) {
        console.log(err);
    }
    
};

export async function mostrarJugadores(id) {
    try {

    const responseJsonJugadores = require('./Players.json');

    // const respuestaJugadores = await axios.get(`https://v3.football.api-sports.io/players?season=2020&team=${id}`,{
    //     headers: {
    //         'x-rapidapi-key': 'caa4dd3a7fb198c86c5537dda4122a1a',
    //         'x-rapidapi-host': 'v3.football.api-sports.io'
    //     },
    // });

        return responseJsonJugadores.response;
    

    } catch (err) {
        console.log(err);
    }
}

export async function mostrarInfoJugador(id) {
    try {
    const respuestaJsonJugador = require("./Players.json");
    // const respuestaJugador = await axios.get(`https://v3.football.api-sports.io/players?season=2020&id=${id}`, { 

    //     headers: {
    //         'x-rapidapi-key': 'caa4dd3a7fb198c86c5537dda4122a1a',
    //         'x-rapidapi-host': 'v3.football.api-sports.io'
    //     },

    // });
    const jug = respuestaJsonJugador.response.find(el => el.player.id == id)
    return jug;


    } catch (err) {
        console.log(err);
    }

    
}