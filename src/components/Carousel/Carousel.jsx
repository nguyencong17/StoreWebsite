import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.scss'
const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
        {/* <span aria-hidden="true" className="carousel-control-next-icon" />
        <span aria-hidden="true" className="carousel-control-prev-icon" />	 */}
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="https://nguyencong17.github.io/HeaphoneStore/assets/image/bg.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="https://nguyencong17.github.io/HeaphoneStore/assets/image/bg3.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="https://nguyencong17.github.io/HeaphoneStore/assets/image/bg2.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;
