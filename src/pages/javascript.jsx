import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { MainContent } from "../components/MainContent";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Javascript = () => {
 const [user, loading, error] = useAuthState(auth)
 let navigate = useNavigate();
  useEffect(()=>{
    if (!user) {
      navigate("/");
    }
  })
  return (
    <>
      <Helmet>
        <title>JavaScript Page</title>
        <meta
          name="description"
          content="JavaScript Page created using create-react-app"
        />
      </Helmet>
      <Header />
      <MainContent PageName="JAVASCRIPT page" />
      <Footer />
    </>
  );
};

export default Javascript;
