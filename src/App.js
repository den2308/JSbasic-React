import { connect } from 'react-redux'
import './App.css';
import { getUser } from './store/actions/user'

function App(props) {
  return (
    <div className="App">
      <h1>{props.firstName}</h1>
      <h1>{props.lastName}</h1>
      <button onClick={() => { props.getUserAction() }}>Change state</button>
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