import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from '../../assets/svgimage.svg';
// import { Container } from './styles';

const CarouselNavigate = () => (
<>
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Image}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Image}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</>
);

export default CarouselNavigate;
