import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const initialState = {}
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools()
);

export default store