import { default as axios } from "axios";

export async function escudos(){
    try{                                
        const response = await axios.get('https://v3.football.api-sports.io/teams?country=Spain&league=140&season=2020',{
            headers: {
                'x-rapidapi-key': 'caa4dd3a7fb198c86c5537dda4122a1a',
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

export async function mostrarJugadores(id) {

    const respuestaJugadores = await axios.get(`https://v3.football.api-sports.io/players?season=2020&team=${id}`,{
        headers: {
            'x-rapidapi-key': 'caa4dd3a7fb198c86c5537dda4122a1a',
            'x-rapidapi-host': 'v3.football.api-sports.io'
        },
    });

    return respuestaJugadores;
}

export async function mostrarInfoJugador(id) {

const respuestaJugador = await axios.get(`https://v3.football.api-sports.io/players?season=2020&id=${id}`, { 

        headers: {
            'x-rapidapi-key': 'caa4dd3a7fb198c86c5537dda4122a1a',
            'x-rapidapi-host': 'v3.football.api-sports.io'
        },

    });

    return respuestaJugador;
}