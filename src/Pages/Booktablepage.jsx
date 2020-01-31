import React from "react";
import Booktable from "../Components/Book_table";
import Footer from "../Components/Footer";
import pageBg from "../images/fooven/page5.jpg";

function Booktablepage() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page" style={{ backgroundImage: `url(${pageBg})` }}>
          <h1>Book your table</h1>
        </div>
      </div>
      <Booktable />
      <Footer />
    </>
  );
}

export default Booktablepage;
