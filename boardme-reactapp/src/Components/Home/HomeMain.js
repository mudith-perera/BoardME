import React, {useEffect}  from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { BsFilter } from 'react-icons/bs';
import HomeCard from './HomeCard';

import Aos from "aos";
import "aos/dist/aos.css";
import first from '../../Images/02.png';
import sec from '../../Images/03.png';
import third from '../../Images/04.png';


const HomeMain = () => {
  useEffect(() => {
    Aos.init({ duration: 300});
  });
  return(
    <div data-aos="zoom-in-up" className = "container">
      
      <Carousel className='py-2'>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={sec}
            alt="First slide"
            />
            <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={first}
            alt="Second slide"
            />

            <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={third}
            alt="Third slide"
            />

            <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
            </Carousel.Caption>
        </Carousel.Item>
        
        </Carousel>
        <div data-aos="fade-up" className="py-4 px-5" >

        <InputGroup size="lg" className="mb-3">
        
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1" className='btn btn-dark'>Search</InputGroup.Text>
        <InputGroup.Text className="btn btn-secondary" id="basic-addon1">
        <BsFilter/>
        </InputGroup.Text>
      </InputGroup>
      </div>
            <div data-aos="fade-up"><HomeCard/></div>
      </div>
  );
}

export default HomeMain;