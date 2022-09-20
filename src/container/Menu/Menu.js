import React, { useEffect, useState } from 'react';
import { Link,useHistory } from "react-router-dom";
import "../Menu/menu.css";
import Mlogo from "../Menu/M-logo.jpg";
import axios from "axios";



const Menu = () => {
    
    const history = useHistory();
    const [user, setUser] = useState([]);



    useEffect(() => {

        const updataData = async () => {
            try {
                const res = await axios.get(`https://multiverse-ott-platform.herokuapp.com/api/userdetails/id`, {
                    headers: { auth: `${JSON.parse(localStorage.getItem("auth"))}` }
                });
                setUser(res.data);
            } catch (error) {
                console.log(error)

            }


        }
        updataData()
    }, [])


    const handleClear = () => {
        localStorage.removeItem("auth");
        window.location.reload();
        history.push("/login");
    };

    return (
        <>

            <nav className="navbar navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/menu">
                        <img src={Mlogo} alt="" />
                    </Link>
                    <div className="dropdown">
                        <Link to={`/profile`}><button className="btn ">
                            {user.name}
                        </button>
                        </Link>
                        <button className="btn" onClick={handleClear} >Sign-Out</button>
                    </div>
                </div>
            </nav>

            <div className="container mt-4 mb-5">
                <div className="row mt-5 align-items-start">
                    <br />
                    <h1 className="head ms-5">Welcome To Multiverse </h1>
                    <h3 className="pick ms-5">pick your desire</h3>
                    <div className="col">
                        <Link to="/movie" className="bi bi-film ms-5 me-5"></Link>
                        <p className="movies ms-5">Movies</p>
                    </div>
                    <div className="col">
                        <Link to="/music" className="bi bi-music-note-beamed"></Link>
                        <p className="movies ms-5">Music</p>
                    </div>
                    <div className="col">
                        <Link to="/video" className="bi bi-camera-reels"></Link>
                        <p className="movies ms-5">Videos</p>
                    </div>
                    <div className="col">
                        <Link to="/books" className="bi bi-book "></Link>
                        <p className="movies ms-5">Books</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;
