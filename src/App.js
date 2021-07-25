import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LoginPage from './LoginPage'
import WeatherPage from './WeatherPage'

import './App.css';

const App = (props) => (
  <div className="app">
  <p>Login screen</p>
    <Router>
      <Switch>
        <Route path="/weather">
          <WeatherPage {...props} />
        </Route>
        <Route path="/login">
          <LoginPage {...props} />
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  </div>)

export default App;