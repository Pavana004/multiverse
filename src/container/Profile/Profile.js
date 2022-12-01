import React, { useState, useEffect } from 'react'
import "../Profile/profile.css";
import Mlogo from "../Menu/M-logo.jpg";
import proimg from "../Profile/user img.png";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';


const Profile = () => {

   const history = useHistory() ;

    const [userData, setuserData] = useState([]);
    const [update, setUpdate] = useState({
        name:"",
        email:"",
    })

    useEffect(() => {

        const updataData = async () => {
            try {
                const res = await axios.get(`https://multiverse-ott.onrender.com/api/userdetails/id`, {
                    headers: { auth: `${JSON.parse(localStorage.getItem("auth"))}` }
                });
                setuserData(res.data);
            } catch (error) {
                toast.dark("Token not validation")

            }
        }
        updataData()
    }, [])

    const handleChange = ({ target: { name, value } }) => {
        setUpdate({ ...update, [name]: value })
    };

    const handleupdate =  async (e) => {
        e.preventDefault();
        try {
               await axios.put(`https://multiverse-ott-platform.herokuapp.com/api/userdetails`,update,
               { headers: { auth: `${JSON.parse(localStorage.getItem("auth"))}` }
            });
            history.push("/menu");
            window.location.reload();
        } catch (error) {
            toast.dark("UPDATE FAILED")
        }
    }


    const handleClear = () => {
        localStorage.removeItem("auth");
        window.location.reload();
    }
    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="/menu">
                        <img src={Mlogo} alt="" />
                    </a>
                    <div className="dropdown">
                        <button className="btn" onClick={handleClear} >Sign-Out</button>
                    </div>
                </div>
            </nav>
            <div className="container mt-4 mb-5">
                <h5 className="membership">Profile</h5>
                <div className="profilecard">
                    <img src={proimg} className="profilecard-img-top" alt="asset" />
                    <div className="card-body">
                        <input type="text"
                            name='name'
                            value={update.name}
                            className='profileinput'
                            onChange={handleChange}
                            placeholder={userData.name}
                        />
                        <br />
                        <br />
                        <input type="text"
                            name='email'
                            className='profileinput'
                            value={update.email}
                            onChange={handleChange}
                            placeholder={userData.email}
                        />
                        <button className='profilebutton ' onClick={handleupdate}>Update</button>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Profile
