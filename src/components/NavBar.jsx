import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

const NavBar = () => {
     return <>
             <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src=".../logo1.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Mi Dulce Locura"
      />
    </Navbar.Brand>
  </Container>
  </Navbar>
     </>;
}

export default NavBar;
