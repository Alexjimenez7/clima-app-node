const axios = require('axios');

const getClima = async(lat, lng) => {


    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9c7ee697e0f2b0bba0f8cacd1beaf3db&units=metric`
    });

    const resp = await instance.get();


    const data = resp.data.main;
    const clima = data.temp;

    return {
        clima
    }



}

module.exports = {
    getClima
}