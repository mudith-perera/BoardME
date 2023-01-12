import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import Aos from "aos";
import "aos/dist/aos.css";

const StudentHome = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000});
  });

  return (
    
    <div data-aos="zoom-in" className="container py-4">
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h4>Frequently Asked Questions</h4>
          </div>
          <div data-aos="fade-right" className="card-body">
            <p class="mb-0">
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className= "btn-info"
              >
                How to create a new account ?
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </Collapse>
            </p>
          </div>
          <div data-aos="fade-left" className="card-body">
            <p class="mb-0">
              <Button
                onClick={() => setOpen1(!open1)}
                aria-controls="example-collapse-text1"
                aria-expanded={open1}
                className= "btn-info"
              >
                How to delete my account ?
              </Button>
              <Collapse in={open1}>
                <div id="example-collapse-text1">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </Collapse>
            </p>
          </div>
          <div data-aos="fade-right" className="card-body">
            <p class="mb-0">
              <Button
                onClick={() => setOpen2(!open2)}
                aria-controls="example-collapse-text1"
                aria-expanded={open2}
                className= "btn-info"
              >
                How save a boarding house?
              </Button>
              <Collapse in={open2}>
                <div id="example-collapse-text1">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </Collapse>
            </p>
          </div>
        </div>
        
        </div>
      </div>

  );
};

export default StudentHome;
