import React from 'react'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  let settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      }

    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  };
  return (
    <>
      <section id="electronics_banner">
        <div className="electronics_slider_box">
          <Slider {...settings}>
            <div className="electronics_slider el_bg_1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                    <div className="electronics_slider_content">
                      <h2 style={{ color: 'white' }}> <span></span></h2>
                      <h4 style={{ color: 'white' }}></h4>
                      <Link to="/shop" style={{ opacity: 0 }} className="theme-btn-one bg-black btn_sm"></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="electronics_slider el_bg_2">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="electronics_slider_content">
                      <h2 style={{ color: 'white' }}> <span></span></h2>
                      <h4 style={{ color: 'white' }}></h4>
                      <Link to="/shop" style={{ opacity: 0 }} className="theme-btn-one bg-black btn_sm"></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="electronics_slider el_bg_3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="electronics_slider_content">
                      <h2 style={{ color: 'white' }}> <span></span></h2>
                      <h4 style={{ color: 'white' }}></h4>
                      <Link to="/shop" style={{ opacity: 0 }} className="theme-btn-one bg-black btn_sm"></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Banner