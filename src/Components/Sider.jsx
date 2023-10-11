// src/components/Carousel.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import sellit from '../images/sellit.jpeg'
import online from '../images/online.jpeg'
import freeDel from '../images/freeDel.jpg'


function MyCarousel() {
    return (
        <Carousel className='mt-28 mx-4'>
            <Carousel.Item >
                <img
                    className="d-block w-100 h-[400px]"
                    src={online}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-[400px]"
                    src={sellit}
                    alt="Second slide"
                />
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-[400px]"
                    src={freeDel}
                    alt="Third slide"
                />
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel;
