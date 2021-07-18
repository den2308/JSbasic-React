import axios from 'axios'

let config = {
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=d5e0d92eb47081c243a43f17dbf15e5c',
    headers: {}
};
export const getWeatherData = async () => {
    try {
        const res = await axios(config)
        return res.data
    } catch (error) {
        console.log(error)
    }
}