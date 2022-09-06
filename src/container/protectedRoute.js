import React from 'react'
import { Redirect, Route} from 'react-router-dom';


const ProtectedRoute = ({path ,component:Component}) => {
    
  return (
       <Route path={path}render={()=>{
         const token = localStorage.getItem("auth");
         return token ? <Component/> : <Redirect to="/login"/>;

       }}/>
  )
}

export default ProtectedRoute;