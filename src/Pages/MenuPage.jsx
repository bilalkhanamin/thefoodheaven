import React from "react";
import Delicious from "../Components/Delicious";
import ExclusiveDishes from "../Components/Exclusive_dishes";
import Footer from "../Components/Footer";

import pageBg from "../images/fooven/page3.jpg";

function MenuPage() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page" style={{ backgroundImage: `url(${pageBg})` }}>
          <h1>Our Delicious Food Menu</h1>
        </div>
      </div>
      <ExclusiveDishes />
      <Delicious />
      <Footer />
    </>
  );
}

export default MenuPage;
