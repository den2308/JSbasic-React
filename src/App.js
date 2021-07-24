import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LoginPage from './LoginPage'
import WeatherPage from './WeatherPage'

import './App.css';

const App = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route path="/weather">
          <WeatherPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  </div>)

export default App;