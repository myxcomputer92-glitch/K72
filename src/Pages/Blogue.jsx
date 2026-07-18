import React from 'react'
import Simple_Text from '../Components/Blogue/Simple_Text'
import Links_Images from '../Components/Blogue/Links_Images'

const Blogue = () => {
  return (
    <div className='w-full h-auto'>
      <Simple_Text/>
      <hr className='text-black w-full mt-15' />
      <Links_Images/>
    </div>
  )
}

export default Blogue
