import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import "../theme.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth)
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="myheader">
      <header className="hide-when-mobile ali">
      
        <h1>
          <Link className="logo" to="/">c4a.dev</Link>
        </h1>
        {/* <button
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="theme-btn"
        >
          {theme}
        </button> */}

<i   onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }} className="fa-solid fa-sun"></i>
<i   onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }} className="fa-solid fa-moon"></i>

        <ul className="flex">

        {!user &&<li className="main-list">
            <NavLink className="main-link" to="/signin">
              Sign-in
            </NavLink>
            
          </li>}

          {!user && <li className="main-list">
            <NavLink className="main-link" to="/signup">
              Sign-up
            </NavLink>
            
          </li>}

          {user && <li onClick={()=>{
            signOut(auth).then(() => {
              // Sign-out successful.
            }).catch((error) => {
              // An error happened.
            });
            
          }} className="main-list">
            <button className="main-link signout" >
              sign-out
            </button>
            
          </li>}
        
        {user && <li className="main-list">
            <NavLink className="main-link" to="/about">
              About
            </NavLink>
            
          </li>}
        
        
          {user && <li className="main-list">
            <NavLink className="main-link" to="/profile">
              Profile
            </NavLink>
          </li>}
        </ul>
      </header>

    </div>
  );
};

export default Header;
