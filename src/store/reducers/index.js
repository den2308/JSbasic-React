import { combineReducers } from 'redux';
import userReducer from './user';
import weatherReducers from './weatherReducers'

const appReducer = combineReducers({
  user: userReducer,
  weatherData: weatherReducers
});

export default appReducer;
