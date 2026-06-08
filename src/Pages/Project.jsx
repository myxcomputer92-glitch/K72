import React from 'react'
import Project_heading from '../Components/Project/Project_heading'
import Images from '../Components/Project/Images'
import Footer from '../Pages/Footer'
const Project = () => {
  return (
    <div className=' selection:bg-lime-300 selection:text-black h-auto overflow-hidden'>
      <Project_heading/>
      <Images/>
      <Footer/>
    </div>
  )
}

export default Project
