import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { URL } from "../../constants/api";
import Button from 'react-bootstrap/Button';
import { Reserve } from "../reserve/Reserve";

export const Property = () => {

  const [properties, setProperties] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);
  const [displayReservationForm, setDisplayReservationForm] = useState(false);
  
  const propertyUrl = `${URL}properties`;
  let history = useHistory();
  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const detailUrl = propertyUrl + "?id=" + id;

  useEffect(() => {

    async function getDetails() {

      try {
        const response = await fetch(detailUrl);

        if (response.ok) {
          const json = await response.json();
          setProperties(json);

        } else {
          setError("We were unable to load the property.");
        }
        
      } catch (error) {
        setError(error.toString);

      } finally {
        setLoad(false);
      }
    }

    getDetails();

  }, [detailUrl]);

  if (load) {
    return <div>Properties are coming loading..</div>;
  }
  if (error) {
    return <div>The properties are currently unavailble. We apologise for the inconvenience.</div>;
  }

  const receivingReservation = () => {
    setDisplayReservationForm(true);
    document.location.href = "#reservationForm";
  };

  return (
    <div>
      <div>
        <p>
          See details and reserve <span>{properties.name}</span>
        </p>
        <div key={properties.id}>
          <div>
            <img
              src={
                properties.imgURL === null
                  ? "https://res.cloudinary.com/hb5n5nkav/image/upload/v1621779159/placeholder_ibkqxi.png"
                  : properties.img_url
              }
              alt="property"
            />
          </div>
          <div>
            <h2>{properties.name}</h2>
            <h4>
              <i className="fas fa-map-marker-alt"></i> {properties.location}
            </h4>
            <p>{properties.description}</p>
            <h2>NOK {properties.price}</h2>

            <Button
              size="lg" variant="primary" 
              onClick={() => receivingReservation()}
            >
              Reserve now
            </Button>
            <span id="reservationForm"></span>
          </div>
        </div>
        <div>
          {displayReservationForm ? <Reserve properties={properties} /> : ""}
        </div>
      </div>
    </div>
  );
};

