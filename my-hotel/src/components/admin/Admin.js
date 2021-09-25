import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Messages } from "./Messages";
import { Reservations } from "./Reservations";
import { EditProperties } from "./EditProperties";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import wrapperstyle from '../layout/wrapperstyle.module.css';
import Heading  from '../layout/Heading';
import SubHeading from '../layout/SubHeading.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Admin.module.css';
import Button from 'react-bootstrap/Button'

  export const Admin = () => {
	const [auth, setAuth] = useContext(AuthContext);
  const [displayMsgs, setMsgs] = useState(false);
  const [displayReservations, setReservations] = useState(false);
  const [displayEdit, setEdit] = useState(false);
  const history = useHistory();

  if (!auth) {
    history.push("/login");
  }

  const logout = () => {
    setAuth(null);
    history.push("/login");
    };

  const toggleMsgs = () => {
    setMsgs(!displayMsgs);
  };

  const toggleReservations = () => {
    setReservations(!displayReservations);
  };

  const toggleEdit = () => {
    setEdit(!displayEdit);
  };
  return (
    <>
      <Container className={styles.adminpanel}>
        <Heading content="Admin" url="/" buttonContent="Back to homepage"/>
        <Row className="justify-content-md-center">
          <Col lg lg="2" className={styles.adminsections}>
            <div onClick={toggleMsgs}>
              <SubHeading content="Inbox"/><i class="fa fa-sort-desc" aria-hidden="true"></i>
            </div>
            <div>
              {displayMsgs ? <Messages /> : ""}
            </div>
          </Col>
          <Col lg lg="2" className={styles.adminsections}>
            <div onClick={toggleReservations}>
              <SubHeading content="Reservations"/><i class="fa fa-sort-desc" aria-hidden="true"></i>
            </div>
            <div>
              {displayReservations ? <Reservations /> : ""}
            </div>
          </Col>
          <Col lg lg="2" className={styles.adminsections}>
            <div onClick={toggleEdit}>
              <SubHeading content="Edit properties"/><i class="fa fa-sort-desc" aria-hidden="true"></i>
            </div>
            <div>
              {displayEdit ? <EditProperties /> : ""}
            </div>
          </Col>
        </Row>
        <div className={styles.logout}>
        {auth ? (
							<>
								<Nav.Link href="/login" className="nav-link">
									<Button variant="light" onClick={logout}>Log out</Button>
								</Nav.Link>
							</>
							) : (
								<Nav.Link href="/login" className="nav-link">
									<Button variant="light" className={styles.btn}>Log in</Button>
								</Nav.Link>
							)}
        </div>
      </Container>
      <div className={`${wrapperstyle.wrapper} ${wrapperstyle.adminpage}`}></div>
    </>
  );
};