import { useState } from 'react'
import ErrorCatchBoundary from './ErrorCatchBoundary'
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
      <ErrorCatchBoundary>
        <ClassComponent title={'John Weak'} />
      </ErrorCatchBoundary>
      <label htmlFor="testInput" className='asdas'>some label</label>
      <input id='testInput' />
    </div>
  );
}

export default App;