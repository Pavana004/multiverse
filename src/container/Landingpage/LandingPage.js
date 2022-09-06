import React from "react";
import {Link} from "react-router-dom";


import logo from "../Landingpage/image/logo.png";
import music from "../Landingpage/image/logo2.png";
import child from "../Landingpage/image/child.png";
import tv from "../Landingpage/image/tv.png";
import asset from "../Landingpage/image/asset.png";
import "../Landingpage/landing.css";


function Landing() {

     return (
          <>
               <header className="showcase">
                    <div className="showcase-top">
                         <img src={logo} alt="MULTIVERSE logo" />
                         <Link to="/Login" className="btn btn-rounded">Sign In</Link>
                    </div>
                    <div className="content">
                         <Link to="/Login" className="btn lg">Start Now</Link>
                         <h1>Welcomes</h1>
                         <h2> Unlimited Movies,TV shows, Audio Music,
                              Videos Songs,Independence Album,Books.</h2>
                         <h3>Watch anywhere. Cancel anytime.</h3>

                    </div>
               </header>
               {/* <!-- section --> */}
               <section className="style-cards">
                    <div className="card-0">
                         <img src={music} alt="section logo" />
                         <div className="desc-0">
                              <h1 className="text">Enjoy your favourite Music</h1>
                              <h3 className="text2">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                         </div>
                    </div>
                    <div className="card-1">
                         <img src={child} alt="schild logo" />
                         <div className="desc-1">
                              <h1>kids watch Comic adventure and studies</h1>
                              <h3>with and favourite</h3>
                         </div>
                    </div>
                    <div className="card-2">
                         <img src={tv} alt="tv logo" />
                         <div className="desc-2">
                              <h1>Download what you want and see offline</h1>
                              <h3>Save your favourite moives and watch your desire time</h3>
                         </div>
                    </div>
                    <div className="card-3">
                         <img src={asset} alt="section logo" />
                         <div className="desc-3">
                              <h1>Watch Everywhere</h1>
                              <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                         </div>
                    </div>
               </section>
               <section className="last">
                    <div className="fqa">
                         <h1>Frequently Asked Questions</h1>
                         <ul className="questions">
                              <li>What is MULTIVERSE</li>
                              <li>where i can Watch ?</li>
                              <li>Is good for kids</li>
                              <li>How much cost for start</li>
                         </ul>
                    </div>

               </section>


          </>
     )



}

export default Landing;