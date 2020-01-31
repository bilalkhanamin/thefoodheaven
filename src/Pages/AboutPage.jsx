import React from "react";
import About from "../Components/About";
import Blogs from '../Components/Blogs'
import pageBg from '../images/fooven/page1.jpg'
import Footer from '../Components/Footer'
function AboutPage() {
  return (
    <>
    <div className="page-wrapper">
      <div className="page" style={{backgroundImage: `url(${pageBg})`}}>
        <h1>Know About us</h1>
      </div>
      </div>
      <Blogs /> 
      <About />
      <Footer />
     </>
  );
}

export default AboutPage;
