import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {Link, Outlet } from 'react-router-dom'
import logo from '../logo.svg';
import './components.css';

function TopNavBar() {
  return (
    <>
    <Navbar bg="light" expand="sm" fixed="top">
      <Container>
        <Navbar.Brand href="/"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/profile"><i className="bi bi-person"/> Profile</Nav.Link>
            <Nav.Link as={Link} to="/search"><i className="bi bi-search" /> Search</Nav.Link>
            <Nav.Link as={Link} to="/post"><i className="bi bi-file-earmark-plus" /> Post</Nav.Link>
            <Nav.Link as={Link} to="/saved"><i className="bi bi-heart" /> Saved</Nav.Link>
            <Nav.Link as={Link} to="/settings"><i className="bi bi-gear" /> Settings</Nav.Link>
            <Nav.Link as={Link} to="/cart"><i className="bi bi-truck-flatbed" /> Cart</Nav.Link>
            <a className="nav-link" href="https://www.linkedin.com/in/evanfischler/"><i className="bi bi-linkedin"  style={{color:"#0072b1"}}/> Share with Evan</a>



            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  );
}

export default TopNavBar;



        // <a
        //   className="App-link"
        //   href="https://reactjs.org"
        //   target="_blank"
        //   rel="noopener noreferrer"
        // >
        //   Learn React
        // </a>

