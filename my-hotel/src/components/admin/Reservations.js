import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { URL } from "../../constants/api";
import Spinner from 'react-bootstrap/Spinner';

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
          <div key={reservation.id}>
                <p>From {reservation.email}</p>
                <p>Name: {reservation.name}</p>
                <p>Checkin date: {reservation.checkInDate}</p>
                <p>Checkout date: {reservation.checkOutDate}</p>
                <p>Guests: {reservation.noOfGuests}</p>
          </div>
        );
      })}
    </>
  );
};