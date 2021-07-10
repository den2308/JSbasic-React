import { useState, useEffect, useReducer, useCallback, useMemo } from 'react'
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case 'plus':
      return { count: state.count + 1 };
    case 'minus':
      return { count: state.count - 1 }
    default:
      return state.count
  }
}


const App = () => {
  const [count, setCount] = useState(0)
  const [countReducer, dispatch] = useReducer(reducer, { count: 0 })

  useEffect(() => {
    //componentDidMount
    //componentWillUpdate
    console.log('did mount')
    console.log('did update')
    return () => {
      //componentWillUnmount
      console.log('unmount')
    }
  }, [count])

  useEffect(() => {
    console.log('some')
  }, [])

  const handleChangeCount = useCallback(
    () => {
      setCount(count + 1)
    },
    [count],
  )


  const handleChangeDispatch = () => {
    dispatch({ type: 'plus' })
  }
  return (
    <div className="App">
      <p>Hello world</p>
      <button onClick={handleChangeCount}>Click</button>
      <button onClick={handleChangeDispatch}>Click1</button>
    </div>
  );
}

export default App;