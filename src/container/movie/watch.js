import React from 'react'
import { useLocation } from 'react-router-dom'

const Watch = () => {
 const location = useLocation();
 const videos = location.videos

  return (
    <>
    <div>
        <video 
        className='watch' 
         autoPlay  controls src={videos.video}  />   
    </div>
    
    </>
  )
}

export default Watch