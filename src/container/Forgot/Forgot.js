import React from 'react'
import Navbar from '../../components/Navbar';
import "../Forgot/forgot.css";
import child from "../Forgot/child.png";


const Forgot = () => {
  return (
    <>
    <Navbar/>
    <section className="form my-5 mx-5">
        <div className="container">
            <div className="row no-gutters">
                <div className="col-lg-5">
                    <img src={child} className="img-fulid" alt=""/>
                </div>
                <div className="col-lg-7 px-5 pt-5">
                    <br/>
                    <form>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type="email" placeholder="Enter your email" className="form-control my-3 p-2"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type="otp" placeholder="Enter your otp" className="form-control my-3 p-2"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <button type="button" className="btn1 mt-3 mb-5 ">Confirm
                                </button>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Forgot