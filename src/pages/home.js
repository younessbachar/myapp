import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { MainContent } from "../components/MainContent";
const Home = () => {
  return (
    <div>
      <>
        <Header />
          <MainContent PageName="HOME Page" />
        <Footer />
      </>
    </div>
  );
};

export default Home;
