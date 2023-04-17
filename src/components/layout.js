import * as React from 'react'
import { Link } from 'gatsby'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({children}) => {
	return (
		<Container>
			
			<Navbar bg="light" expand="lg">
		      <Container>
		        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
		        <Navbar.Toggle aria-controls="basic-navbar-nav" />
		        <Navbar.Collapse id="basic-navbar-nav">
		          <Nav className="me-auto">
		          	<NavDropdown title="Services" id="basic-nav-dropdown">
		              <NavDropdown.Item as={Link} to="/">Handyman</NavDropdown.Item>
		              <NavDropdown.Item as={Link} to="/">Kitchen & Bath</NavDropdown.Item>
		              <NavDropdown.Item as={Link} to="/">Tile</NavDropdown.Item>
		              <NavDropdown.Item as={Link} to="/">Painting</NavDropdown.Item>
		              <NavDropdown.Item as={Link} to="/">Carpentry</NavDropdown.Item>
		            </NavDropdown>
		            <Nav.Link as={Link} to="/">Gallery</Nav.Link>
		            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
		            <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
		          </Nav>
		        </Navbar.Collapse>
		      </Container>
		    </Navbar>
		    
			{children}
			<footer>
				<p>
					Contact me for a free estimate
				</p>
			</footer>
		</Container>
	)
}

export default Layout