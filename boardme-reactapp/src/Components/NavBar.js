import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import { Link } from "react-router-dom";

import { Link1 ,Span } from "./StyleElements/NavBarElements.js";

function NavBar() {
  return (
    <Navbar bg="myNavColor" expand="lg">
      <Container>
        <Navbar.Brand style={{ color: "white" }} href="/">
          BoardME
        </Navbar.Brand>
        <Navbar.Brand style={{ color: "white" }} href="/">
          
        </Navbar.Brand>
        <Navbar.Brand style={{ color: "white" }} href="/">
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-4 my-lg-2" style={{ maxHeight: "100px" }}>
            <Nav.Link href="/" style={{ color: "white" }}>
              <Link1>Home<Span className="Ho"></Span></Link1>
            </Nav.Link>
            <Nav.Link href="/" style={{ color: "white" }}>
              
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="fnq">
            <Link1>fnq<Span className="Ho"></Span></Link1>
            </Nav.Link>
            <Nav.Link href="/" style={{ color: "white" }}>
              
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/uc">
            <Link1>About Us<Span className="Ho"></Span></Link1>
            </Nav.Link>
          </Nav>
          <Link to={"sign-up"} className="btn btn-outline-warning mr-2 ">
            SignUp
          </Link>
          <p>&ensp;&ensp;</p>
          <Link to={"login"} className="btn btn-outline-warning mr-2 ">
            Login
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
