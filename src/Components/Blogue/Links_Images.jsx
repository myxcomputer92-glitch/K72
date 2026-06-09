import React from 'react'

const Links_Images = () => {
  return (
    <div className='w-full h-[180vh]'>
      <div className="parent grid grid-cols-2 grid-rows-2 gap-5 p-5">

<div className="part-1 w-full h-screen p-3">

  <div className="contain-img h-[60vh] overflow-hidden border-2 border-transparent rounded-4xl">

  <img className='w-full object-cover transition-all hover:scale-105 hover:cursor-pointer hover:duration-75' src="/images/space-img.jpg" alt="" srcset="" />

  </div>
<ul>
  <li className='Special-case2 font-medium text-2xl mt-2 ml-5'>3 octobre 2025</li>
</ul>
<h1 className='font-bold text-3xl uppercase pt-5 w-[80%] hover:underline'><a href="">Écrire un article sur l’écriture d’un article avec ChatGPT : plongée dans la mise en abyme
</a>
</h1>

<button className='bg-gray-300 w-24 h-8 mt-5 font-medium text-lg hover:cursor-pointer hover:bg-lime-300'>Création</button>
<button className='bg-gray-300 ml-1 w-24 h-8 font-medium text-lg hover:cursor-pointer hover:bg-lime-300'>Tech & IA</button>

</div>

<div className="part-2 w-full h-screen p-3">
   <div className="contain-img h-[60vh] overflow-hidden border-2 border-transparent rounded-4xl">

  <img className='w-full object-cover h-full cursor-pointer' src="/images/gif-img.gif" alt="" srcset="" />

  </div>
<ul>
  <li className='Special-case2 font-medium text-2xl mt-2 ml-5'>  9 mai 2025</li>
</ul>
<h1 className='font-bold text-3xl uppercase pt-5 w-[70%] hover:underline'><a href="">Conseil & relation client: un duo qui ne se briefe pas, qui se construit
</a>
</h1>

{/* <button className='bg-gray-500 w-24 h-8 mt-5 font-medium text-lg hover:cursor-pointer hover:bg-lime-300'>Création</button> */}
<button className='bg-gray-300 mt-5 ml-1 w-24 h-8 font-medium text-lg hover:cursor-pointer hover:bg-lime-300'>Conseil</button>

</div>


<div className="parts p-3 h-[80vh] w-[70%]">
  <div className="contain-img h-[45vh] overflow-hidden border-2 border-transparent rounded-[40px]">

  <img className='w-full object-cover h-full transition-all hover:scale-105 hover:cursor-pointer hover:duration-75' src="/images/ai-img.png" alt="" srcset="" />

  </div>
<ul>
  <li className='Special-case2 font-medium text-2xl mt-2 ml-5'>  9 mai 2025</li>
</ul>
<h1 className='font-medium text-xl uppercase pt-5 w-[75%] hover:underline'><a href="">Pub prédictive: L’IA révolutionne le ciblage</a>
</h1>

{/* <button className='bg-gray-500 w-24 h-8 mt-5 font-medium text-lg hover:cursor-pointer hover:bg-lime-300'>Création</button> */}
<button className='bg-gray-300 mt-5 ml-1 w-24 h-8 font-medium text-lg hover:cursor-pointer hover:bg-lime-300'>Tech & IA</button>

</div>

      </div>


    </div>
  )
}

export default Links_Images
