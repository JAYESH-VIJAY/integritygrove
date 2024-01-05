import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Loader from './Components/Loader/Loader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Loader/>
    </div>                                                                                                                                                                    
  )
}

export default App
