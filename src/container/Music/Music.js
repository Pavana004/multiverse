import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import musicposter from "../Music/vikram.jpg";
import aurora from "../Music/aurora.png";
import billi from "../Music/biili.jpg";
import Mlogo from "../Menu/M-logo.jpg";
import { toast } from 'react-toastify';


const Music = () => {

  const [music, setMusic] = useState([]);

  useEffect(() => {

    const url = "https://backend-one-tau.vercel.app/api/allMusic";
    axios.get(url)
      .then((res) => {
        setMusic(res.data);
      })
      .catch((error) => {
        toast.dark(error)
      })

  }, [])

  return (
    <>
      <nav class="navbar navbar-light">
        <div class="container">
          <Link class="navbar-brand" to="/menu">
            <img src={Mlogo} alt="" />
          </Link>
          <div>
            <h5>Multiverse Gobal Music Enjoy Here</h5>
          </div>
        </div>
      </nav>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={musicposter} className="d-block " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={aurora} className="d-block " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={billi} className="d-block " alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br/>

     {/* datafetch */}
     <h2 className='title'>Recent Treanding Songs</h2> 
      <div className="container6">
        {music.map((musicData) => {
          return (
            <Link to={{ pathname: "/musicplayer", musics: musicData }}>
              <img className='apiImg' src={musicData.poster} alt="" key={musicData._id} />
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Music
