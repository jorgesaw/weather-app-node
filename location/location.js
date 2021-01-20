const axios = require('axios')

let getLocationLatLon = async(location) => {

    let encodedUrlLocation = encodeURI(location);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrlLocation}`,
        headers: { 'x-rapidapi-key': 'ddc0099398msh48e6ce85662698fp160512jsn45be7d831320' }
    });

    try {
        var resp = await instance.get();
    } catch (err) {
        return `Not results for ${location}`;
    }

    location = resp.data.name;
    const lat = resp.data.coord.lat;
    const lon = resp.data.coord.lon;

    return {
        location,
        lat,
        lon
    }
}

module.exports = { getLocationLatLon }