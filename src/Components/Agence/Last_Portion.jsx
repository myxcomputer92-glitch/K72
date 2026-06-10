import React from 'react'

const Last_Portion = () => {
  return (
    <>
    <div className='w-full h-screen relative bg-red-500 flex flex-col items-center'>

        <div className="contain-3-images">

            <div className="first-img flex flex-col items-center">
                <h1>Voir tous les projets</h1>
            <img src="/images/agence-last-img-1.jpg" alt="" />
            <h1>Opto-Réseau
On vous voit comme personne</h1>
            </div>


            <div className="second-img">
                <h2>Lamajeure</h2>
                <h1>Lamajeure</h1>
            <img src="/images/agence-last-img-2.jpg" alt="" />
            </div>



            <div className="third-img">
                <h2>Lassonde</h2>
                <h1>Fruité</h1>
            <img src="/images/agence-last-img-3.jpg" alt="" />
            </div>

        </div>
      
    </div>
    </>
  )
}

export default Last_Portion
