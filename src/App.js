import React, { useContext } from 'react';
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";
import {RouterProvider , createBrowserRouter } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';


function App() {
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/html",
    element: <HTML />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
  
  
]); 
  
 // eslint-disable-next-line no-undef
 const {theme} = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
