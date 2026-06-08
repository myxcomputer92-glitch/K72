import React from 'react'

const Simple_Text = () => {
  return (
    <>
    <div className='w-full flex justify-between pt-22'>
        <ul className='Special-case'>
      <li className='text-3xl'>Blogue</li>
        </ul>
        <div className="whatever-2 flex mr-4">
            <h1 className='text-2xl'>Catégories:</h1>
            <h4 className='w-16 text-center min-h-max ml-[0.5px] text-xl font-medium capitalize text-white bg-black hover:cursor-pointer'>Tout</h4>
            <h4 className='w-fit min-h-max ml-[0.5px] text-xl font-medium capitalize bg-gray-300 text-black hover:cursor-pointer'>Création</h4>
            <h4 className='w-fit min-h-max ml-[0.5px] text-xl font-medium capitalize bg-gray-300 text-black hover:cursor-pointer'>Tech & IA</h4>
            <h4 className='w-fit min-h-max ml-[0.5px] text-xl font-medium capitalize bg-gray-300 text-black hover:cursor-pointer'>Conseil</h4>
        </div>
    </div>
    </>
  )
}

export default Simple_Text
