import React from "react";
import {
  BrowserRouter as Router,useRoutes
} from "react-router-dom";
import Boja from "../pages/Login/Home/Boja";
import Home from "../pages/Login/Home/Home";



const Routers = () => {

  const AppRouter = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/boca", element: <Boja /> },
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