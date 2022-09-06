import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import "../Music/music.css";
import Mlogo from "../Menu/M-logo.jpg";

const MusicApi = () => {



  const location = useLocation();
  const songData = location.musics;


  return (
    <>
      <nav class="navbar navbar-light">
        <div class="container">
          <Link class="navbar-brand" to="/music">
            <img src={Mlogo} alt="" />
          </Link>
          <div>
            <h5>Multiverse Music</h5>
          </div>
        </div>
      </nav>
      <div key={songData._id} className="container mt-5 mb-5">
        <div className='row'>
          <div className='col'>
            <img className='audioImg' src={songData.poster} alt="" />
          </div>
          <div className='col'>
            <h1 className='audiotitle'>{songData.title}</h1>
            <h5 className='singers'>{songData.artist}</h5>
            <audio className='audio' src={songData.songs} controls autoPlay />
          </div>
        </div>
      </div>

    </>
  )
}

export default MusicApi;