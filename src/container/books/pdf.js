import React from 'react'
import { useLocation } from "react-router-dom";
import "../books/books.css";

const Pdf = () => {
    const location = useLocation();
    const data = location.book;

  return (
    <div>
        <embed className='pdf'  src={data.pdf} />
    </div>
  )
}

export default Pdf