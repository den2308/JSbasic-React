import weatherConstant from '../constants/weatherConstant';

export const getWeatherDataAction = (data) => ({
    type: weatherConstant.GET_WEATHER_DATA,
    data,
});
