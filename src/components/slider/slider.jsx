import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './slick.module.css';
import images from '../../utils/images.js';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 7000,
      autoplaySpeed: 1,
      cssEase: "linear"
    };

    // if (window.innerWidth >= 320) {
    //   settings.slidesToShow = 1.4;
    // } else if (window.innerWidth >= 768) {
    //   settings.slidesToShow = 3;
    // } else if (window.innerWidth >= 1024) {
    //   settings.slidesToShow = 3;
    // } else if (window.innerWidth >= 1440) {
    //   settings.slidesToShow = 3;
    // } else {
    //   settings.slidesToShow = 3.5;
    // }

    return (
      <div className={styles.slider}>
        <Slider {...settings}>
          <div>
            <img src={images.house} alt="Дом" />
          </div>
          <div>
            <img src={images.forest} alt="Лес" />
          </div>
          <div>
            <img src={images.road} alt="Дорога" />
          </div>
          <div>
            <img src={images.bridge} alt="Мост" />
          </div>
          <div>
            <img src={images.track} alt="Трасса" />
          </div>
        </Slider>
      </div>
    );
  }
}
