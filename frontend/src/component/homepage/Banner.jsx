import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Banner.css"; // 👈 import css

const Banner = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const images = ["/banner.png", "/cachord.png"];

  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={2000}
      arrows={false}
      showDots= {false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Banner ${index + 1}`} className="banner-img" />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
