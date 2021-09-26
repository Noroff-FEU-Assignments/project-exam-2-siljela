import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { URL } from "../../constants/api";
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import styles from './Messages.module.css';

const reservationsURL = URL + "reservations";

export const Reservations = () => {
  const [load, setload] = useState(true);
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);
  const [auth] = useContext(AuthContext);

  useEffect(() => {
    if (!auth) {
      return;
    }

    async function getReservations() {
      const token = auth.jwt;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await axios.get(reservationsURL, { headers });
        console.log(response.data);
        setReservations(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setload(false);
      }
    }
    getReservations();
  }, [auth]);

  if (load) {
    return <div>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
    </div>;
  }
  if (error) {
    return <div>We were unable to load reservations at this moment. Return to <a href="/admin">admin-page</a>.</div>;
  }
  if (reservations.length === 0) {
    return <div>You currently have no reservations.</div>;
  }
  return (
    <>
      {reservations.map((reservation) => {
        return (

          <Form key={reservation.id} className={styles.messageBox} >
            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Name:
              </Form.Label>
              <Col sm="10">
                <Form.Control className={styles.guestInput} plaintext readOnly defaultValue={reservation.name} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email:
              </Form.Label>
              <Col sm="10">
                <Form.Control className={styles.guestInput} plaintext readOnly defaultValue={reservation.email} />
              </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Checkin date:
              </Form.Label>
              <Col sm="10">
                <Form.Control className={styles.guestInput} plaintext readOnly defaultValue={reservation.checkInDate} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Checkout date:
              </Form.Label>
              <Col sm="10">
                <Form.Control className={styles.guestInput} plaintext readOnly defaultValue={reservation.checkOutDate} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Number of guests:
              </Form.Label>
              <Col sm="10">
                <Form.Control className={styles.guestInput} plaintext readOnly defaultValue={reservation.noOfGuests} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Sent:
              </Form.Label>
              <Col sm="10">
                <Form.Control className={styles.guestInput} plaintext readOnly defaultValue={reservation.created_at} />
              </Col>
            </Form.Group>
          </Form>
        );
      })}
    </>
  );
};