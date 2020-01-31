import React, { Component } from "react";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/fooven/blogs/1.png";
import img2 from "../images/fooven/blogs/2.png";
import img3 from "../images/fooven/blogs/3.png";
import img4 from "../images/fooven/blogs/4.png";

class Blogs extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [
        {
          profile: img1,
          date: "Apr 06, 2019 # Food News",
          title: "Adama kind deep gatherin first over fter his great."
        },
        {
          profile: img2,
          date: "Apr 06, 2019 # Food News",
          title: "Adama kind deep gatherin first over fter his great."
        },
        {
          profile: img3,
          date: "Apr 06, 2019 # Food News",
          title: "Adama kind deep gatherin first over fter his great."
        },
        {
          profile: img4,
          date: "Apr 06, 2019 # Food News",
          title: "Adama kind deep gatherin first over fter his great."
        }
      ]
    };
  }

  Blog = () => {
    return this.state.blogs.map(b => {
      return (
        <div className="card blog">
          <img src={b.profile} alt="" className="card_img" />
          <div className="card_text">
            <h5>{b.date}</h5>
            <span>{b.title}</span>

            <button className="btn card_btn">Read more</button>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="blogsContainer">
        <div className="container">
          <div className="blogsHeading">
            <p>recent</p>
            <h1>Latest blogs</h1>
          </div>
          <div className="cards_container">{this.Blog()}</div>
        </div>
      </div>
    );
  }
}

export default Blogs;
