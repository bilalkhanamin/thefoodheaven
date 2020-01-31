import React, { Component } from "react";
import { Link} from "react-router-dom";
import Logo from "../images/fooven/icons/logo.svg";
import Hamberger from "../images/fooven/icons/hamburger.svg";
class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      isSticky: false,
      isOpen: false
    };
  }

  toggle = () => {
    setTimeout(() => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }, 500);
  };

  sticky = () => {
    if (window.scrollY > 0) {
      this.setState({
        isSticky: true,
        isOpen: false
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  };

  top = () => {
    window.scrollTo(0,0);
  }

  render() {
    window.addEventListener("scroll", this.sticky);
    return (
      <nav class={this.state.isSticky ? "navbar nav" : "navbar"}>
        <div className="container flex">
          <img src={Logo} alt="logo" className="logo" />
          <img
            src={Hamberger}
            alt="logo"
            className="hamberger"
            onClick={this.toggle}
          />
          <ul className={this.state.isOpen ? "navbar-nav" : ""}>
            <Link to="/thefoodheaven" onClick={this.top}>
              <li>
                <a href="/thefoodheaven">home</a>
              </li>
              
            </Link>
            <Link to="/about" onClick={this.top}>
              <li>
                <a href="/about">about</a>
              </li>
            </Link>

            <Link to="/chefs" onClick={this.top}> 
              <li>
                <a href="/chefs">chefs</a>
              </li>
            </Link>

            <Link to="/menu" onClick={this.top}>
              <li>
                <a href="/menu">menu</a>
              </li>
            </Link>

            <Link to="/contact" onClick={this.top}>
              <li>
                <a href="/contact">contact</a>
              </li>
            </Link>
          </ul>
      <Link to='./booktable' onClick={this.top}>
          <a href="bookTable" className="btn menu_btn">
            Book A Table
          </a>

          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
