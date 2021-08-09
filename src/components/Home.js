import React from "react";
import Myhead from "./Heading";
import MyImage from "./Image";
import Mycontent from "./Content";
import MyGenre from "./Genre";
import Footer from './Footer';
import Songs from "./Songs";


const Home = () => {
  return (
    <>

      <Myhead />
      <MyImage />
      <Mycontent />
      <Songs />
      <MyGenre />
      <Footer />


    </>
  );
};

export default Home;