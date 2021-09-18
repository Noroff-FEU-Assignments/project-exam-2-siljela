// import "../../App.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { URL } from "../../constants/api";
import { useHistory } from "react-router";
const reservationsURL = URL + "reservations";

export const Reservations = () => {
  const [loading, setLoading] = useState(true);
  const [reservations, setReservation] = useState([]);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);
  console.log(setAuth);

  const history = useHistory();
  if (!auth) {
    history.push("/admin");
  }

  useEffect(() => {
    const token = auth.jwt;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    async function getreservations() {
      try {
        const response = await axios.get(reservationsURL, { headers });
        setReservation(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getreservations();
  }, [auth]);

  if (loading) {
    return <div>Your reservations are loading</div>;
  }
  if (error) {
    return <div>An error has occured</div>;
  }

  if (reservations.length === 0) {
    return <div className="empty-items">No incoming reservations yet</div>;
  }
  return (
    <>
      {reservations.map((reservation) => {
        return (
          <div key={reservation.id}>
            <div>
              <p>From {reservation.email}</p>
              <p>Name: {reservation.name}</p>
              <p>Checkin date: {reservation.checkInDate}</p>
              <p>Checkout date: {reservation.checkOutDate}</p>
              <p>
                Guests:
                {`${reservation.noOfGuests} guests`}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};