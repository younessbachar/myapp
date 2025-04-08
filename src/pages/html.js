import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { MainContent } from "../components/MainContent";
import { Helmet } from "react-helmet-async";

const HTML = () => {
  return (
     <>
        <Helmet>
        <title>HTML Page </title>
        <meta
          name="description"
          content="HTML Page created using create-react-app"
        />
      </Helmet>
        <Header />
        <MainContent PageName="HTML page" />
        <Footer />
      </>
  );
};

export default HTML;
