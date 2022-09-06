import React,{useState} from "react";
import Navbar from "../../../components/Navbar";
import auroa from "../Login/auroa.png";
import { Link,useHistory } from "react-router-dom";
import axios from "axios";
import "../Login/login.css";
import { toast } from 'react-toastify';




function Login() {

  const history = useHistory();

  const[log,setLog]=useState({
    email:"",
    password:"",
})


const handleChange = ({ target:{name,value}})=>{

    setLog({...log,[name]:value})
};

const handlesubmit = async (evt)=>{
     evt.preventDefault();
     try {
           const url= "https://multiverse-ott-platform.herokuapp.com/api/login";
           const res = await axios.post(url,log);
           localStorage.setItem("auth",JSON.stringify(res.data));
           history.push("/membership");
           toast.dark("Login Successfully");
        
     } catch (error) {
      toast.dark("Please Check Your Email and Password");
        
     }
}

  return (
    <>
      <Navbar/>
      <section className="form my-5 mx-5">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <img src={auroa} className="img" alt="" />
            </div>
            <div className="col-lg-7 px-5 pt-5">
              <h1>MULTIVERSE</h1>
              <br />
              {/* <!-- login form --> */}
              <form onSubmit={handlesubmit}>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input id="email" 
                    type="email" 
                    name="email"
                    value={log.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    className="form-control my-3 p-2" 
                    required/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input id="password" 
                    type="password" 
                    name="password"
                    value={log.password}
                    onChange={handleChange}
                    placeholder="password" 
                    className="form-control my-3 p-2" 
                    required/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button type="submit" id="login" className="btn1 mt-3 mb-5">Next
                    </button>
                  </div>
                </div>
                <br />
                <p>Don't have an account <span><Link to="/register" className="reg">Register here</Link></span></p>
              </form>
            </div>
          </div>
        </div>
      </section>


    </>


  )

}

export default Login;