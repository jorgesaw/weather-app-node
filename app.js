const argv = require('./config/yargs').argv;
const { getLocationLatLon } = require('./location/location');
const { getLocationWeather } = require('./weather/weather');


// getLocationLatLon(argv.location)
//     .then(console.log);


// getLocationWeather(-33.3358, -60.2252)
//     .then(console.log());




let getInfo = async(location) => {
    try {
        let coords = await getLocationLatLon(location);
        let temp = await getLocationWeather(coords.lat, coords.lon);
        return `La temperatura actual de ${coords.location} es de ${temp}°`;
    } catch (err) {
        return `No se pudo determinar la temperatura de ${location}`;
    }
}

getInfo(argv.location)
    .then(console.log)
    .catch(console.log);




/*
    
SOLUCIÓN AL PROBLEMA DEL API

1. Vayan a esta URL -> https://rapidapi.com/community/api/open-weather-map

2. Se suscriben al API

3. El parámetro "location" ahora es "q"
    
*/