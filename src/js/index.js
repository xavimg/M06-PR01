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