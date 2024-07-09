import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import About from './components/About'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>

<Routes>
  <Route path='/' element = {<Home/>} />
  <Route path='/about' element = {<About/>} />
  <Route path='/login' element = {<Login/>} />
  <Route path='/hero' element = {<Hero/>} />
</Routes>
</BrowserRouter>

    </>
  )
}

export default App
