import React, { useState, useEffect } from 'react';
import MovApi from './Movapi';
import "../movie/movies.css";
import axios from 'axios';
import { Link } from "react-router-dom";


// third party Api
const Api_url = "https://api.themoviedb.org/3/movie/popular?api_key=70c42bca3022a7c2143791c0438e4a43";
function Movies() {
  const [mov, setmov] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(Api_url)
      .then((res) => res.json())
      .then((data) => {
        setmov(data.results);
      })
      .then((error) => console.log(error));
  }, []);

// Api 
  
 
  useEffect(() => {
    const url = "https://multiverse-ott.onrender.com/api/allmovies";
    axios.get(url)
      .then(res => {
        setVideos(res.data);
      })
      .catch(error => {
        console.log(error)
      })

  }, []);


  return (
    <>
      <div>
        <figure className='position-relative'>
        <video className='loopVideo' 
         src="https://firebasestorage.googleapis.com/v0/b/multiverse-admin.appspot.com/o/loop%2Floopvideos.mp4?alt=media&token=96ad9190-b46b-4c1d-a88f-20e87ec95b41" 
         muted 
         loop 
         autoPlay />
         <figcaption>
          PEAKY BLINDERS - Now Streaming On 
         </figcaption>

         </figure>
      </div>
      <h2 className='title'>Recent Update</h2>
      <div className='container1'>
        {videos.map((file) => {
          return (
            <>
              <Link to={{ pathname: "/watch", videos: file }}>
                <img className="apiImg" src={file.poster} alt="" key={file._id} />
              </Link>
            </>
          )
        })}
      </div>

      <div>
        {/* <img className="cover" src={cover} alt="cover" /> */}
        <h2 className='title'>Popular</h2>
        <div className='container1'>
          {mov.map((moData) =>
            <MovApi key={moData.id}{...moData}  />)}
        </div>

      </div>
      <h2 className='title2'>TOP RATED</h2>
      <div className='container2'>
        {mov.map((moData) =>
          <MovApi key={moData.id}{...moData} />)}
      </div>
    </>
  )
}

export default Movies;
