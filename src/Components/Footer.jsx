import React from "react";
import facebook from "../images/fooven/icons/facebook.svg";
import instagram from "../images/fooven/icons/instagram.svg";
import twitter from "../images/fooven/icons/twitter.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_container">
            <div>
              <h3>About us</h3>
              <p>
                Heaven fruitful doesn't over for these theheaven fruitful doe
                over days appear creeping seasons sad behold beari ath of it fly
                signs bearing be one blessed after.
              </p>
              <div>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
            </div>

            <div>
              <h3>importent links</h3>
              <ul>
                <li>
                  <a href="/thefoodheaven">WHMCS-bridge</a>
                </li>
                <li>
                  <a href="/thefoodheaven">Search domain</a>
                </li>
                <li>
                  <a href="/thefoodheaven">My Account</a>
                </li>
                <li>
                  <a href="/thefoodheaven">shpping cart</a>
                </li>
                <li>
                  <a href="/thefoodheaven">our shop</a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Contact</h3>
              <p>
                Address :Hath of it fly signs bear be one blessed after <br />
                Phone : +0000 000 000 <br />
                Email : your@mail.com
              </p>
            </div>

            <div>
              <h3>news latter</h3>
              <p>
                Heaven fruitful doesn't over lesser in days. Appear creeping
                seas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="copy_right">
        <p>Copyright ©2020 All rights reserved </p>

      </div>
    </>
  );
}

export default Footer;
