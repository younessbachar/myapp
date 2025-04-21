import React, { useContext, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { MainContent } from "../components/MainContent";
import { Helmet } from "react-helmet-async";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";




const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/"); // Redirect to the signin page if the user is not logged in
    }
  }, [user]); // Add `user` and `navigate` as dependencies

  return (
      <>
       <Helmet>
       <title>HOME Page </title>
        <meta
          name="description"
          content="home Page created using create-react-app"
        />
      </Helmet>
      <div>
        <Header />
          {user &&  <main>Welcome: {user.displayName} <span>🧡</span></main>}

          {!user &&  <main>
          <p className="pls">
            Please{" "}
            <Link style={{ fontSize: "30px" ,cursor:"pointer" ,padding: "10px" , color:"cyan"}} to="/signin">
              sign in
            </Link>{" "}
            to continue... <span>🧡</span>
          </p>
        </main>}
        <Footer />
      </div>
        
      </>
  );
};

export default Home;
