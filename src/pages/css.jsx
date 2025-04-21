import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { MainContent } from "../components/MainContent";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

const Css = () => {
  const [user, loading, error] = useAuthState(auth)
  let navigate = useNavigate();
  useEffect(()=>{
    if(!user){
      navigate("/");
    }
  })

  return (
      <>
       <Helmet>
       <title>CSS Page </title>
        <meta
          name="description"
          content="Css Page created using create-react-app"
        />
      </Helmet>

        <Header />
        <MainContent PageName="CSS page" />
        <Footer />
      </>
  );
};

export default Css;
