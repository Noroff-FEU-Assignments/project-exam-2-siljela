// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Book from "../book/Book";
import Contact from "../contact/Contact";
import Browse from "../browse/Browse";
import Admin from "../admin/Admin";
import logo from "../../images/logo.png";

function Layout() {
	return (
		<Router>
			<Navbar expand="lg">
				<NavLink to="/" exact>
					<Navbar.Brand><img src={logo} alt="logo"/></Navbar.Brand>
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavLink to="/" exact className="nav-link">
							Home
						</NavLink>
                        <NavLink to="/book" className="nav-link">
							Book
						</NavLink>
						<NavLink to="/contact" className="nav-link">
							Contact
						</NavLink>
					</Nav>
                    <Nav>
                        <NavLink to="/browse" className="nav-link">Browse Properties</NavLink>

                        <NavDropdown title="Social Media" id="basic-nav-dropdown">
                            <NavDropdown.Item href="link">Facebook &rsaquo; </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="link">Instagram &rsaquo;</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="link">Youtube &rsaquo;</NavDropdown.Item>
                        </NavDropdown>

                        <NavLink to="/admin" className="nav-link">Admin</NavLink>
                    </Nav>
				</Navbar.Collapse>
			</Navbar>
			<Container>
				<Switch>
					<Route path="/" exact component={Home} />
                    <Route path="/book" exact component={Book} />
					<Route path="/contact" component={Contact} />
                    <Route path="/browse" component={Browse} />
                    
                    <Route path="/admin" component={Admin} />
				</Switch>
			</Container>
		</Router>
	);
}

export default Layout;