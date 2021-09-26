import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import logo from "../../images/logo.png";
import styles from "./Navigation.module.css";
import Button from 'react-bootstrap/Button';

export const Navigation = () => {
	const [auth, setAuth] = useContext(AuthContext);
	const [button, setButton] = useState(true);
	console.log(button);
	
	const history = useHistory();

	const logout = () => {
	setAuth(null);
	history.push("/login");
	};

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
					
						<NavDropdown title="Social Media" id="collasible-nav-dropdown">
							<NavDropdown.Item href="link"><i class="fa fa-facebook" aria-hidden="true"></i>Facebook &rsaquo; </NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="link"><i class="fa fa-instagram" aria-hidden="true"></i>Instagram &rsaquo;</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="link"><i class="fa fa-youtube-play" aria-hidden="true"></i>Youtube &rsaquo;</NavDropdown.Item>
						</NavDropdown>
						{auth ? (
							<>
								<Nav.Link href="/admin" className="nav-link">
									<Button variant="light">Admin</Button>
								</Nav.Link>
								<Nav.Link href="/login" className="nav-link">
									<Button variant="light" onClick={logout}>Log out</Button>
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