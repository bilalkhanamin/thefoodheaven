import React from "react";
import Contact from "../Components/Contact";
import Footer from '../Components/Footer'

import pageBg from "../images/fooven/page4.jpg";

function ContactPage() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page" style={{ backgroundImage: `url(${pageBg})` }}>
          <h1>contact us</h1>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default ContactPage;
