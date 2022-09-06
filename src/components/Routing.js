import React from 'react';
import { Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from '../container/protectedRoute';


import Landing from "../container/Landingpage/LandingPage";
import Login from "../container/Landingpage/Login/Login";
import Res from "../container/Resg/Res";
import membership from '../container/membership/membership';
import Menu from '../container/Menu/Menu';
import Movies from "../container/movie/Movies";
import Books from '../container/books/Books';
import Music from '../container/Music/Music';
import Videos from "../container/videos/Videos";
import Watch from '../container/movie/watch';
import Pdf from '../container/books/pdf';
import MusicApi from '../container/Music/MusicApi';
import VideosWatch from '../container/videos/videosWatch';
import Profile from '../container/Profile/Profile';
import Forgot from '../container/Forgot/Forgot';


const Routing = () => {


  return (
    <>
      <Route path="/" component={Landing} exact />
      <Route path="/landing" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Res} />
      <Route path="/forgot" component={Forgot} />
      <Route path="/membership" component={membership} />
      <ProtectedRoute path="/menu" component={Menu} />
      <ProtectedRoute path="/movie" component={Movies} />
      <ProtectedRoute path="/books" component={Books} />
      <ProtectedRoute path="/music" component={Music} />
      <ProtectedRoute path="/video" component={Videos} />
      <ProtectedRoute path="/watch" component={Watch} />
      <ProtectedRoute path="/pdf" component={Pdf} />
      <ProtectedRoute path="/musicplayer" component={MusicApi} />
      <ProtectedRoute path="/videoswatch" component={VideosWatch} />
      <ProtectedRoute path="/profile" component={Profile} />



      {/* alret */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />






    </>

  )
}

export default Routing;