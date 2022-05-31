import React from 'react'

import {
  BrowserRouter as Router,useRoutes
} from "react-router-dom";
// import Home from "../pages/Home/Home";
import Login from '../pages/Login'
import Register from '../pages/Register'


const Routers = () => {

  //rutas protegidas?
  const AppRouter = () => {
    let routes = useRoutes([
      // { path: "/", element: <Home /> },
       {path: "/register", element:<Register />} ,
       {path:"/login" , element:<Login/>}
    ]);
    return routes;
  };


  return (
    <Router>

          <AppRouter/>

    </Router>
  );
};

export default Routers;


