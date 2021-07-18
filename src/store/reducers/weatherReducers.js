/* eslint-disable import/no-anonymous-default-export */
import constants from '../constants/weatherConstant';

export const initialState = () => ({
    weatherData: {}
});

export default (state = initialState(), action) => {
    switch (action.type) {
        case constants.GET_WEATHER_DATA:
            return {
                weatherData: action.data
            }
        default: return state;
    }
};
