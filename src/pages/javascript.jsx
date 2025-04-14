import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { MainContent } from "../components/MainContent";
import { Helmet } from "react-helmet-async";

const Javascript = () => {
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
