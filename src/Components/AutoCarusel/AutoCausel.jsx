import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css';

export default class  
AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    return (
      <div className="slide-container my-10" id="deal">
        <h2 className="stat-value mb-4 text-5xl text-[#1B1464] font-bold">Our Crazy Client zone</h2>
        <Slider {...settings}>
          <div>
            <img src="https://i.ibb.co/wdHGbgM/happy-young-man-with-fishing-rod-showing-size-of-fish-with-hands.jpg" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/VYvXmrd/fisherman-fishing-rod-activity-hobby-fishing-freshwater-lake-pond-river-happiness.jpg" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/9Nd0r51/review3.jpg" alt="" />
          </div>
          <div>
            <img src="https://as1.ftcdn.net/v2/jpg/02/08/93/36/1000_F_208933609_idYJBoWf6bHmTlwuxs3RPxYfoBvzG39o.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}