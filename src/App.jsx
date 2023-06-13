import Greetings from './Greetings'

const person = {
  name: 'John',
  lastname: 'Grey'
}

function App() {
  return (
    <>
      <input type="text" />
      <input type="text" />
      <span>{person.lastname}</span>
      <Greetings />
    </>
  )
}

export default App
