import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
// import { BrowserRouter as NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import logo from "../../images/logo.png";
import styles from "./Navigation.module.css";
import Button from 'react-bootstrap/Button';

export const Navigation = () => {
	const [auth, setAuth] = useContext(AuthContext);
	// const [click, setclick] = useState(false);
	const [button, setButton] = useState(true);
	console.log(button);
	
	// const handleClick = () => setclick(!click);
	const history = useHistory();

	const logout = () => {
	setAuth(null);
	history.push("/login");
	};

//   const closeMobileMenu = () => {
//     setclick(false);
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   };

	const showButton = () => {
	if (window.innerWidth <= 1000) {
		setButton(false);
	} else {
		setButton(true);
	}
	};

	useEffect(() => {
	showButton();
	}, []);
	window.addEventListener("resize", showButton);

	return (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" className={styles.navigation}>
            <Container>
				<Navbar.Brand>
					<Link to="/"><img src={logo} alt="logo" className={styles.logo}/></Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.navToggle}/>
				<Navbar.Collapse id="responsive-navbar-nav" className={`"resNavbar" ${styles.resNavbar}`}>
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
					
						<Nav.Link href="/reserve" className="nav-link">Reserve</Nav.Link>
						<NavDropdown title="Social Media" id="collasible-nav-dropdown">
							<NavDropdown.Item href="link">Facebook &rsaquo; </NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="link">Instagram &rsaquo;</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="link">Youtube &rsaquo;</NavDropdown.Item>
						</NavDropdown>
						{auth ? (
							<>
								<Nav.Link href="/admin" className="nav-link">
									<Button>Admin</Button>
								</Nav.Link>
								<Nav.Link href="/login" className="nav-link">
									<Button onClick={logout}>Log out</Button>
								</Nav.Link>
							</>
							) : (
								<Nav.Link href="/login" className="nav-link">
									<Button variant="light" className={styles.btn}>Log in</Button>
								</Nav.Link>
							)}
                    </Nav>
				</Navbar.Collapse>
            </Container>
		</Navbar>
				
	);
}

// export default Navigation;