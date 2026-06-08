import React from 'react'
import Upper_Footer from '../Components/Footer/Upper_Footer'
import Lower_Footer from '../Components/Footer/Lower_Footer'

const Footer = () => {
  return (
    <div className='w-full bg-black h-[60vh] flex mt-2 pt-2 flex-col justify-between selection:bg-lime-300 selection:text-black'>
      <Upper_Footer/>
      <Lower_Footer/>
    </div>
  )
}

export default Footer
