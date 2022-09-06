import React from 'react'
import {useLocation } from "react-router-dom"




const VideosWatch = () => {

  const location = useLocation();
  const data =location.file;


  return (
    <div >
    <video 
    className='watch' 
     autoPlay  controls src={data.album} />   
</div>
  )
}

export default VideosWatch