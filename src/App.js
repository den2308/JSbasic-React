import { useState } from 'react'
import ListItems from './ListItems'
import FormikForm from './FormikForm'
import './App.css';

const someList = [
  {
    name: 'John',
    lastName: 'Weak'
  },
  {
    name: 'Steeve',
    lastName: 'Not Weak'
  },
  {
    name: 'Peter',
    lastName: 'Grifin'
  },
  {
    name: 'Laura',
    lastName: 'Jo'
  }

]

const App = () => {
  const [listOfItems, setListOfItems] = useState(someList)
  const [inputValue, setInputValue] = useState('')

  const handleShowName = (name) => {
    console.log('name', name)
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log('input', inputValue)
  }

  return (
    <div className="App">
      <ul>
        {listOfItems.map((item, index) =>
          <ListItems
            key={item.name}
            name={item.name}
            lastName={item.lastName}
            showName={handleShowName}
          />
        )}
      </ul>
      <br />
      <form onSubmit={handleSubmitForm}>
        <label>
          Name React state:
          <input value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} type='text' name='react' />
        </label>
        <label>
          Name browser state:
          <input type='text' name='name' defaultValue="hi" />
        </label>
        <input type='submit' value='Submit' />
      </form>
      <FormikForm />
    </div>
  );
}

export default App;