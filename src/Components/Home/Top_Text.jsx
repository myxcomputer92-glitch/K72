import React from 'react'
import Video from './Video'

const Top_Text = () => {
  return (
    <div className='absolute w-full flex flex-col items-center text-white'>
      <nav className='w-full absolute top-0 flex justify-between'>
        <h1 className='text-white text-7xl'>K72</h1>
        <div className="box bg-black w-66 h-12 flex flex-col items-end pr-12 justify-center hover:bg-lime-300 hover:text-black">
          <hr className='text-white w-18 pt-2'/>
          <hr className='text-white w-8 pt-2' />
        </div>
      </nav>
    <div className='text-white text-9xl uppercase'>L'étincelle</div>
    <div className='text-white flex text-9xl h-[20vh] object-center uppercase'>qui
        <div className='mt-5 w-[18vw] h-32 border-4 border-transparent rounded-[60px] overflow-hidden'>
         <video muted loop autoPlay src="/video2.mp4"></video>
        </div>
        
        génère</div>
    <div className='text-white text-9xl uppercase'>la créativité</div>

    <p className='w-72 indent-12 relative left-[40vw] top-8'>K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
    </div>
  )
}

export default Top_Text
