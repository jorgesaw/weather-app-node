const axios = require('axios')

const apiKey = 'ccec83f47b3b19f6578dfb98ce287c4c';
const units = 'metric';

let getLocationWeather = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`);
    return resp.data.main.temp;
}

module.exports = { getLocationWeather }