import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaUser, FaUserCircle } from 'react-icons/fa';
import logo from "../../asca new.png"


const Navigation = () => {
  const [user, setUser] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [navBackground, setNavBackground] = useState('transparent');

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setNavBackground('#f8f9fa');
    } else {
      setNavBackground('transparent');
    }
  };

  window.addEventListener('scroll', handleScroll);

  const handleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
  };

  const handleLogout = () => {
    setUser(false);
    setShowProfileDropdown(false);
  };

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        backgroundColor: navBackground,
        transition: 'background-color 0.5s ease-in-out',
      }}
    >
      <Navbar.Brand href="/"><img className='logo' src={logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/write">Write</Nav.Link>
        </Nav>
        <Nav>
          {user ? (
            <NavDropdown
              title={
                <div
                  onClick={handleProfileDropdown}
                  style={{ cursor: 'pointer' }}
                >
                  <FaUserCircle size={24} />
                </div>
              }
              show={showProfileDropdown}
              alignRight
            >
              <NavDropdown.Item href="#profile">
                View Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <NavDropdown
              title={
                <div
                  onClick={handleLoginDropdown}
                  style={{ cursor: 'pointer' }}
                >
                  <FaUser size={24} />
                </div>
              }
              show={showLoginDropdown}
              alignRight
            >
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
