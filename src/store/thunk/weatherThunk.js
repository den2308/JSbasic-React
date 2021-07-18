import { getWeatherData } from '../../api/weatherAPI'
import { getWeatherDataAction } from '../actions/weatherData'

export const getWeatherDataThunk = () => async (dispatch) => {
  try {
    const res = await getWeatherData();
    dispatch(getWeatherDataAction(res));
  } catch (err) {
    console.log(err);
  }
};
