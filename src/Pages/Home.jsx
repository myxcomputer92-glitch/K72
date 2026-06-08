import React from 'react'
import Video from '../Components/Home/Video'
import Top_Text from '../Components/Home/Top_Text'
import Bottom_Text from '../Components/Home/Bottom_Text'

const Home = () => {
  return (
    <div className='relative selection:bg-lime-300 selection:text-black'>
      <Top_Text/>
      <Video/>
      <Bottom_Text/>
    </div>
  )
}

export default Home
