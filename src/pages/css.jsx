import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { MainContent } from "../components/MainContent";
import { Helmet } from "react-helmet-async";

const Css = () => {
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
