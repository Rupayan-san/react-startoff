import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(13);

  const addVal = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log("value added", counter);
    }
    else console.log("dont go beyond 20 brudder");
    
  }

  const decVal = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("value decremented", counter);
    }
    else console.log("dont go below 0 brudder");
    
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count: {counter}</h2>

      <button
      onClick={ addVal }
      >increment</button>

      <br />
      
      <button
      onClick={ decVal }
      >decrement</button>
    </>
  )
}

export default App
