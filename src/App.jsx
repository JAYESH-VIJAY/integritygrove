import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Loder from './Components/Loder/Loder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Loder/>
    </div>                                                                                                                                                                    
  )
}

export default App
