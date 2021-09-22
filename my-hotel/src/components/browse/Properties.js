import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { URL } from "../../constants/api";
import { Reserve } from "../reserve/Reserve";
import Button from 'react-bootstrap/Button';
import Column from '../content/items/Column';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Heading from '../layout/Heading';
import wrapperstyle from '../layout/wrapperstyle.module.css';
import styles from './Properties.module.css';
import BreadcrumbNavThree from '../content/items/BreadcrumbNavThree';

export const Properties = () => {

  const [properties, setProperties] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);
  const [displayReservationForm, setDisplayReservationForm] = useState(false);

  let history = useHistory();
  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const detailUrl = `${URL}properties/` + id;

  useEffect(() => {

    async function getDetails() {

      try {
        const response = await fetch(detailUrl);
        
        if (response.ok) {
          const json = await response.json();
          console.log(json)
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
    <Container>
      <BreadcrumbNavThree secondLink="browse" secondLinkText="Browse Properties" thirdLinkText={properties.name} />
      <Card className={styles.card}>
        {/* <Card.Img variant="top" src={properties.img_url} alt={properties.name}/> */}
          <Card.Body>
            <div key={properties.id}>
              <Heading content={properties.name} url="/browse" buttonContent="Back to property overview"/>
              <Card.Text>
                Location: {properties.location}
              </Card.Text>
              <Card.Text>{properties.description}</Card.Text>
              <Card.Text>{properties.price}</Card.Text>
              <Container>
                <Column title="Pool" result={properties.pool ? 'Yes' : 'No'}/>
                <Column title="Cleaning" result={properties.cleaning ? 'Yes' : 'No'}/>
                <Column title="Parking" result={properties.parking ? 'Yes' : 'No'}/>
                <Column title="Towels" result={properties.towels ? 'Yes' : 'No'}/>
                <Column title="Breakfast" result={properties.breakfast ? 'Yes' : 'No'}/>
              </Container>
              <Button
                size="lg" variant="primary" 
                onClick={() => receivingReservation()}
              >
                Reserve now
              </Button>
              <span id="reservationForm"></span>
              
            </div>
          </Card.Body>
          <div>
            {displayReservationForm ? <Reserve properties={properties} /> : ""}
          </div>
      </Card>
      <img src={properties.img_url} className={wrapperstyle.wrapper}/>
    </Container>
  );
};

