import React, { useContext } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { MainContent } from "../components/MainContent";
import { Helmet } from "react-helmet-async";




const Home = () => {
  

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
          <MainContent PageName="HOME Page" />
        <Footer />
      </div>
        
      </>
  );
};

export default Home;
