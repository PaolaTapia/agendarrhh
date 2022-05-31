import React from "react";
import {
  BrowserRouter as Router,useRoutes
} from "react-router-dom";
import Home from "./pages/Login/Home/Home";


const App = () => {

  const AppRouter = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
    ]);
    return routes;
  };


  return (
    <Router>

          <AppRouter/>

    </Router>
  );
};

export default App;
