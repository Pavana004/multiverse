import React,{useState} from 'react';
import {Modal} from "react-bootstrap"

const Api_img = "https://image.tmdb.org/t/p/w500";

const MovApi = ({ original_title, poster_path, overview, release_date, vote_average, original_language }) => {

  const [show,setShow]=useState(false);

  const handleshow = ()=>{
    setShow(true)
  }
 const handleClose = ()=>{
  setShow(false)
 }

  return (
    <>
      <div className='api'>
        <img className="apiImg" src={Api_img + poster_path} alt="apiImg" onClick={handleshow}/>
        <Modal show={show} onHide={handleClose}>
             <Modal.Header>
             <h5>{original_title}</h5>
             <img className="apiImg" src={Api_img + poster_path} alt="apiImg" />
             </Modal.Header>
             <Modal.Body>
              <h5>Overview : {overview}</h5>
             </Modal.Body>
             <Modal.Footer>
              <h5>Vote : {vote_average}</h5>
             </Modal.Footer>
        </Modal>

        
      </div>

    </>

  )

}

export default MovApi;