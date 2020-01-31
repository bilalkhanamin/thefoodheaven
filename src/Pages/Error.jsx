import React from "react";
import pageBg from '../images/fooven/page1.jpg'
import Footer from '../Components/Footer'
function AboutPage() {
  return (
    <>
    <div className="page-wrapper">
      <div className="page" style={{backgroundImage: `url(${pageBg})`}}>
        <h1>Error 404 not found</h1>
       </div>
      </div>
       <Footer />
     </>
  );
}

export default AboutPage;