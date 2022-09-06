import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../books/books.css";
import { Link } from 'react-router-dom';
import cover from "../books/books.jpg";


const Books = () => {

  const [book, setbook] = useState([]);
  const [booksUrl, setBookUrl] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=49OQP2q4CIB8XTfe9oi0ffcKg3eTL73u`);
      setbook(res.data.results.books);
    }
    fetchdata();

  }, [])

  
  
  useEffect(() => {
    const url = "https://multiverse-ott-platform.herokuapp.com/api/allbooks";
    axios.get(url)
      .then((res) => {
        setBookUrl(res.data);
        console.log(res.data);

      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <>
      {/* <h1 className='Vt'>Most Popular Multiverse Books</h1> */}
      <figure className='position-relative'>
      <img className='coverPic' src={cover} alt=""/>
       <figcaption className='figcap'>
       Most Popular Multiverse Books
       </figcaption>
      </figure>
      <br/>
      <br/>
      <h1 className='booktitle'>Tamil Classic</h1>
      <div className='containerbook'>
        {booksUrl.map((booksFile) => {
          return (
            <>
              <Link to={{ pathname: "/pdf", book: booksFile }}>
                <img className='bookImg' src={booksFile.poster} key={booksFile._id} alt="" />
              </Link>
            </>
          )
        })}
      </div>
      <hr />
      <h1 className='booktitle'>English Novals</h1>
      <div className='containerbook'>
        {book.map((data) => {
          const { book_image, rank } = data;
          return (
            <div key={rank}>
              <img className='bookImg' src={book_image} alt="" />
            </div>
          )
        })}
      </div>
      <hr/>
      <h1 className='booktitle'>Recent Update</h1>
      <div className='containerbook'>
        {book.map((data) => {
          const { book_image, rank } = data;
          return (
            <div key={rank}>
              <img className='bookImg' src={book_image} alt="" />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Books