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
      {user && <h3>done</h3>}
      <header className="hide-when-mobile ali">
      
        <h1>
          <Link to="/">c4a.dev</Link>
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
            <NavLink className="main-link" >
              sign-out
            </NavLink>
            
          </li>}
        
        {user && <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>
            
          </li>}
        
        
          {user && <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>
          </li>}
        </ul>
      </header>

      <header className="show-when-mobile ali">
        <h1>c4a.dev</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/html">Full Course</NavLink>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/css">Full Course</NavLink>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/javascript">coming soon🔥</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
