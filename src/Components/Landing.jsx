import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="wrapper">
        <div className="main_banner">
          <main className="container ">
            <div className="main_text">
              <div>
                <h5>Taste The Best</h5>
                <h1>
                  <span>welcome to </span>
                  <br /> food heaven
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Beatae delectus repellat blanditiis eaque reprehenderit <br />
                  alias natus quas a animi similique quos.
                </p>
                <Link to="/booktable">
                <a href="bookTable" className="reserve-btn btn">
                  RESERVATION
                </a>
                </Link>
                <div className="watch">
                  <a className="play-btn" href="/"></a>
                  <span>watch our story</span>

                  <span></span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      </>
  );
}

export default Landing;
