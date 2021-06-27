import { useState } from 'react'
import './App.css';
import ClassComponent from './ClassComponent'

function App() {
  const [count, setCount] = useState(0)
  const handlePulsCount = () => {
    setCount(count + 1)
  }

  const showComponents = () => {
    if (count === 0) {
      return <ClassComponent count={count} setCount={handlePulsCount} title='John weak' />
    } else {
      return <ClassComponent title='John Dou' />
    }
  }
  return (
    <div className="App">
      <h1>John Weak</h1>
      <button onClick={handlePulsCount}>Click</button>
      {count === 0 ?
        <ClassComponent count={count} setCount={handlePulsCount} title='John weak' /> :
        <ClassComponent title='John Dou' />
      }
    </div>
  );
}

export default App;