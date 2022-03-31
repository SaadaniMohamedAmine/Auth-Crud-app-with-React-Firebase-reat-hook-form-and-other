import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = ({ isAuth }) => {
  return (
    <Navbar className="text-light menu" expand="md" fixed="top">
      <Container>
        <Link to="/" className="navbar-brand text-light">
          Blog Site
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-light"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link active text-light">
              Home
            </Link>
            <Link to="/posts" className="nav-link text-light">
              Posts
            </Link>
            {isAuth ? (
              <Link to="/feed" className="nav-link text-light">
                Profile
              </Link>
            ) : (
              <Link to="/login" className="nav-link text-light">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
