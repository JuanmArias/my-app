/* import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const NavBar = () => {
    return <>
          <Navbar bg="light">
            <Container>
              <Navbar.Brand href="#home">
                <Row className="align-items-center">
                  <Col md={6}>
                    <img
                      src="img/horny_1.png"
                      width="200rem"
                      height="200rem"
                      className="d-inline-block align-top"
                      alt="Horny Store"
                    />
                  </Col>
                  <Col md={6}>
                    <h3 style={{ color: 'red' }}>Horny Store</h3>
                  </Col>
                </Row>
              </Navbar.Brand>
            </Container>
          </Navbar>
    </>;
}

export default NavBar; */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu '}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/productos' className='nav-links' onClick={closeMobileMenu}>
                Productos
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/nosotros' className='nav-links' onClick={closeMobileMenu}>
                Nosotros
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contacto' className='nav-links' onClick={closeMobileMenu}>
                Contacto
              </Link>
            </li>
          </ul>
          <Link to='#' className='navbar-logo'>
            <img src="img/horny_.png" alt="horny store" width="200rem" height="200rem" className="d-inline-block align-top" />
          </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar



