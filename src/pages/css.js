import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { MainContent } from "../components/MainContent";

const Css = () => {
  return (
    <div>
      <>
        <Header />
        <MainContent PageName="CSS page" />
        <Footer />
      </>
    </div>
  );
};

export default Css;
