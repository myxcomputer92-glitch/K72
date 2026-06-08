import React from 'react'

const Center_Text = () => {
  return (
    <>
    <div className='relative flex flex-col items-center justify-center leading-35 bg-black text-white h-auto w-full'>
      <h1 className='text-[4cm] uppercase'>Pour</h1>
<h1 className='text-[4cm] uppercase'>parler de</h1>
<h1 className='text-[4cm] uppercase'> votre</h1>
<h1 className='text-[4cm] uppercase'>projet</h1>

<a className='absolute cursor-pointer left-10 bottom-14 w-[15%] leading-normal'>Dans un écran ou un bureau.
Chez vous. Chez nous.
Partout.</a>

<a className='absolute cursor-pointer right-10 bottom-10 w-[15%] leading-normal'>525 Av. Viger O - Suite 400
Montréal, QC H2Z 1G6 →
bonjour@k72.ca</a>

    </div>
{/* 
<div className="left absolute left-0 top-0">
    <a href=''>Dans un écran ou un bureau.
Chez vous. Chez nous.
Partout.</a>
</div>
<div className="right flex justify-end absolute bg-blue-500 top-0 right-0">
    <p className='w-[50%] bg-red-500 h-[250px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam culpa facilis ea voluptas. Vel voluptatibus doloribus repellat cum hic neque.</p>
</div> */}
    </>
  )
}

export default Center_Text
