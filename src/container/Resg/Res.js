import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import poster from "../Resg/ani.png";
import Navbar from '../../components/Navbar';
import axios from "axios";
import { toast } from 'react-toastify';
import "../Resg/res.css";

const Res = () => {

  const history = useHistory()

  const[reg,setReg]=useState({
    name:"",
    email:"",
    password:"",
    confirmpassword:"",
})


const handleChange = ({ target:{name,value}})=>{

    setReg({...reg,[name]:value})
};

const handlesubmit = async (evt)=>{
     evt.preventDefault();
     try {
           const url= "https://multiverse-ott.onrender.com/api/register";
           await axios.post(url,reg);
           history.push("/login");
           toast.dark("New User Createded");

        
     } catch (error) {
       toast.dark("Please Check Your Email and Password");
        
     }
    
}



    return (
        <div>
            <Navbar/>
            <section className="form my-5 mx-5">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-5">
                            <img src={poster} className="img" alt="" />
                        </div>
                        <div className="col-lg-7 px-5 pt-5">
                            <h1>Register here</h1>
                            <br />
                            <form onSubmit={handlesubmit}>
                                <div className="form_row">
                                    <div className="col-lg-7">

                                        <input type="text" 
                                         name='name'
                                         onChange={handleChange}
                                         value={reg.name}
                                         placeholder="Name"
                                         className="form-control my-3 p-2" 
                                         id="name" 
                                         required />
                                    </div>
                                </div>
                                <div className="form_row">
                                    <div className="col-lg-7">

                                        <input type="email" 
                                         name='email'
                                         onChange={handleChange}
                                         value={reg.email}
                                         placeholder="Email" 
                                         className="form-control my-3 p-2" 
                                         id="email"
                                         required />
                                    </div>
                                </div>
                                <div className="form_row">
                                    <div className="col-lg-7">

                                        <input type="password" 
                                         name='password'
                                         onChange={handleChange}
                                         value={reg.password}
                                         placeholder="password" 
                                         className="form-control my-3 p-2" 
                                         id="password" 
                                         required />
                                    </div>
                                </div>
                                <div className="form_row">
                                    <div className="col-lg-7">

                                        <input type="password" 
                                        name='confirmpassword'
                                        onChange={handleChange}
                                        value={reg.confirmpassword}
                                        placeholder="confirm password" 
                                        className="form-control my-3 p-2"
                                        id="confirm_password" 
                                        required />
                                    </div>
                                </div>
                                <div className="form_row">
                                    <div className="col-lg-7">
                                        <button type="submit" id="sumbit" className="btn1 mt-3 mb-5 ">Next
                                        </button>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Res
