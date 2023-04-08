import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
