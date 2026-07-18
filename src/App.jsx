import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Blogue from './Pages/Blogue'
import Agence from './Pages/Agence'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Footer/>
    <Project/>
    <Contact/>
    <Blogue/>
    <Agence/>
    </>
  )
}

export default App
