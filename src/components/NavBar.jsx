import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const NavBar = () => {
    return <>
          <Navbar bg="dark">
            <Container>
              <Navbar.Brand href="#home">
                <Row className="align-items-center">
                  <Col md={6}>
                    <img
                      src="../logo192.png"
                      width="100"
                      height="100"
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

export default NavBar;
