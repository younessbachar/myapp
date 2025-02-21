import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { MainContent } from "../components/MainContent";

const HTML = () => {
  return (
    <div>
      <>
        <Header />
        <MainContent PageName="HTML page" />
        <Footer />
      </>
    </div>
  );
};

export default HTML;
