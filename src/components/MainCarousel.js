import React from 'react';
import {Carousel} from 'react-bootstrap'
import Cover from "../assets/img/recetti-cover.png";
export default function MainCarousel() {
    return (
        <Carousel slide
    
        autoPlay={true}
        interval={1000}
    
        >
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'500px'}}
          src={Cover}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'500px'}}
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
          alt="Second slide"
        />
    
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'500px'}}
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    )
}