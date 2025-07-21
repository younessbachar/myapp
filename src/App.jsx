import React, { useContext } from 'react';
import Home from "./pages/home";
import {RouterProvider , createBrowserRouter } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';
import Signin from './pages/Signin';
import Singup from './pages/Singup';
import Profile from './pages/profile';
import About from './pages/about';
import Page404 from './pages/page404';
import EditTask from './pages/edit-task/edit-task';


function App() {
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Singup />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
  ,
    {
    path: "/edit-task",
    element: <EditTask />,
  }
  
  
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
