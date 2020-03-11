const axios = require('axios')

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=0200e26fe0d041cd40a15f382632595b`)
    return resp.data.main.temp
}

module.exports = {
    getClima
}