import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Blogue from './Pages/Blogue'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    {/* <Footer/> */}
    {/* <Project/> */}
    <Contact/>
    <Blogue/>
    </>
  )
}

export default App
