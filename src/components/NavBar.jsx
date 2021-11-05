import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Offcanvas } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { Col } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import './navBar.css';


const NavBar = () => {
  return <>
          <Navbar sticky="top" expand={false}>
            <Container fluid>
              <Col md={4}>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="start"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Horny Store</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-start flex-grow-1 pe-3">
                      <Nav.Link as={Link} to={"/home"}>Inicio</Nav.Link>
                      <Nav.Link as={Link} to={"/productos"}>Productos</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Col>
           
              <Col md={5}>
                <Navbar.Brand href="#home">
                  <img
                    src="img/horny_1.png"
                    alt="Horny Store"
                  />
                </Navbar.Brand>
              </Col>

              <Col md="auto">
              <CartWidget/>
              </Col>
     
            </Container>
          </Navbar>
  </>
}

export default NavBar;