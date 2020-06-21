const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: 'https://community-open-weather-map.p.rapidapi.com/weather?q=' + encodeUrl,
        headers: { 'X-RapidAPI-Key': '057bcc11cdmshb40b2e804d6ad7ep1c2117jsn59ef0a48157d' }
    });

    const resp = await instance.get();

    if (resp.data.length == 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }

    //.then(resp => {
    //    console.log(resp.data);
    //})
    //.catch(err => {
    //    console.log(err);
    //});

}

module.exports = {
    getLugarLatLng
}