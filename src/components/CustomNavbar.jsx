import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.png";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="customNav">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="100px" height="55px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              TV Shows
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Movies
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Recently Added
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              My List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
