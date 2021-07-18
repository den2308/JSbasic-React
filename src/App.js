import { Button, Typography } from 'antd';
import { connect, useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import './App.css';
import { getUser } from './store/actions/user'
import { getWeatherDataThunk } from './store/thunk/weatherThunk'

function Home() {
  return <h2>Home page</h2>;
}

function About() {
  return <h2>About page</h2>;
}

function Users() {
  let history = useHistory();
  const gotToAboutPage = () => {
    history.replace("/about");
  }
  return (
    <>
      <h2>Users page</h2>
      <Button type="primary" onClick={gotToAboutPage}>
        Go to about
      </Button>
    </>
  );
}


function App(props) {
  const dispatch = useDispatch();

  const handleGetDataFromApi = () => {
    dispatch(getWeatherDataThunk())
  }
  const handleChangeUserState = () => {
    props.getUserAction()
  }

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <Typography.Title level={3}>{props.firstName}</Typography.Title>
      <Typography.Title level={3}>{props.lastName}</Typography.Title>
      <Button type="primary" onClick={handleChangeUserState}>Change state</Button>
      <br />
      <br />
      <Button type="primary" onClick={handleGetDataFromApi}>
        Get data
      </Button>
      <br />
      <br />
    </div>
  );
}

const mapStateToProps = (state) => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName
})

const mapDispatchToProps = (dispatch) => ({
  getUserAction: () => { dispatch(getUser()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);