import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Messages } from "./Messages";
import { Reservations } from "./Reservations";
import { EditProperties } from "./EditProperties";
import wrapperstyle from '../layout/wrapperstyle.module.css';
import Heading  from '../layout/Heading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Admin.module.css';

  export const Admin = () => {
  const [auth] = useContext(AuthContext);
  const [showMessagePanel, setshowMessagePanel] = useState(false);
  const [showReservationsPanel, setshowReservationsPanel] = useState(false);
  const [showEditPropertiesPanel, setsshowEditPropertiesPanel] = useState(false);
  const history = useHistory();

  if (!auth) {
    history.push("/login");
  }

  const toggleMessageBody = () => {
    setshowMessagePanel(!showMessagePanel);
  };

  const toggleReservationsBody = () => {
    setshowReservationsPanel(!showReservationsPanel);
  };

  const togglePropertyBody = () => {
    setsshowEditPropertiesPanel(!showEditPropertiesPanel);
  };
  return (
    <>
      <Container className={styles.adminpanel}>
        <Heading content="Administration page" url="/" buttonContent="Back to homepage"/>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <div onClick={toggleMessageBody}>
              <h2>Inbox</h2>
            </div>
            <div>
              {showMessagePanel ? <Messages /> : ""}
            </div>
          </Col>
          <Col xs lg="2">
            <div onClick={toggleReservationsBody}>
              <h2>Reservations</h2>
            </div>
            <div>
              {showReservationsPanel ? <Reservations /> : ""}
            </div>
          </Col>
          <Col xs lg="2">
            <div onClick={togglePropertyBody}>
              <h2>Edit properties</h2>
            </div>
            <div>
              {showEditPropertiesPanel ? <EditProperties /> : ""}
            </div>
          </Col>
        </Row>
        {/* <div> */}
        {/* <div> */}
          {/* <div>
            <div onClick={toggleMessageBody}>
              <h2>Inbox</h2>
            </div>
            <div>
              {showMessagePanel ? <Messages /> : ""}
            </div>
          </div> */}

          {/* <div>
            <div onClick={toggleReservationsBody}>
              <h2>Reservations</h2>
            </div>
            <div>
              {showReservationsPanel ? <Reservations /> : ""}
            </div>
          </div> */}

          {/* <div>
            <div onClick={togglePropertyBody}>
              <h2>Edit properties</h2>
            </div>
            <div>
              {showEditPropertiesPanel ? <EditProperties /> : ""}
            </div>
          </div> */}
        {/* </div> */}
      </Container>
      <div className={`${wrapperstyle.wrapper} ${wrapperstyle.adminpage}`}></div>
    </>
  );
};