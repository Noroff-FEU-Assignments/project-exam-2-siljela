import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import logo from "../../images/logo.png";
import styles from "./Navigation.module.css";

function Navigation() {
	
	return (
		
            <Navbar collapseOnSelect expand="lg">
                <Container>
				<NavLink to="/" exact >
					<Navbar.Brand><img src={logo} alt="logo" className={styles.logo}/></Navbar.Brand>
				</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.resNavbar}/>
				<Navbar.Collapse id="responsive-navbar-nav" className="resNavbar">
					<Nav className="me-auto">
						<Nav.Link href="/" exact className="nav-link">
							Home
						</Nav.Link>
                        <Nav.Link href="/browse" className="nav-link">
							Browse Properties
						</Nav.Link>
						<Nav.Link href="/contact" className="nav-link">
							Contact
						</Nav.Link>
					</Nav>
                    <Nav>
                        <Nav.Link href="/reserve" className="nav-link">Reserve</Nav.Link>
                        <NavDropdown title="Social Media" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="link">Facebook &rsaquo; </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="link">Instagram &rsaquo;</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="link">Youtube &rsaquo;</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/admin" className="nav-link">Admin</Nav.Link>
                    </Nav>
				</Navbar.Collapse>
            </Container>
			</Navbar>
				
	);
}

export default Navigation;