import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/fooven/customer/1.png";
import img2 from "../images/fooven/customer/2.png";
import img3 from "../images/fooven/customer/3.png";

class Customer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [
        {
          profile: img1,
          name: "john doe",
          disgnation: "Chef exectuive officer",
          review: `Prepared do an dissuade be so whatever steepest. Yet her beyond
            looked either day wished nay. By doubtful disposed do juvenile
            an. Now curiosity you explained immediate why behaviour.`
        },
        {
          profile: img2,
          name: "john Mak",
          disgnation: "Chef exectuive officer",
          review: `Prepared do an dissuade be so whatever steepest. Yet her beyond
            looked either day wished nay. By doubtful disposed do juvenile
            an. Now curiosity you explained immediate why behaviour.`
        },
        {
          profile: img3,
          name: "jane doe",
          disgnation: "Chef exectuive officer",
          review: `Prepared do an dissuade be so whatever steepest. Yet her beyond
            looked either day wished nay. By doubtful disposed do juvenile
            an. Now curiosity you explained immediate why behaviour.`
        }
      ]
    };
  }

  feedBack = () => {
    return this.state.reviews.map(r => {
      return (
        <div className="feedback">
          <img src={r.profile} alt="person" />
          <h3>{r.name}</h3>
          <p>{r.review}</p>
          <span>{r.disgnation} </span>
        </div>
      );
    });
  };
  render() {
    var Settings = {
      infinite: true,
      dots: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      lazyLoad: true,
      center: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ]
    };

    return (
      <div className="customerFeedback">
        <div className="container">
          <div className="customer_heading">
            <p>testimonials</p>
            <h1>customer feedback</h1>
          </div>
          <Slider {...Settings}>
             {this.feedBack()}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Customer;
