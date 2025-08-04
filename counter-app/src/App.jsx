import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <>
      <h1>Counter: {count}</h1>
      <div className='container d-flex gap-2'>
        <button className='btn btn-primary' onClick={increment}>Increment</button>
        <button className='btn btn-secondary' onClick={decrement}>Decrement</button>
      </div>
      <div className="counter-footer">
        <p className="text-center text-muted mb-0">
          Made with {" "}
          <img
            src={reactLogo}
            alt="React logo"
            className="react-logo"
          />{" "}
          by{" "}
          <a
            href="https://github.com/duduhnrq"
            target="_blank"
            rel="noopener noreferrer"
          >
            duduhnrq
          </a>
        </p>
      </div>
    </>
  )
}

export default App
