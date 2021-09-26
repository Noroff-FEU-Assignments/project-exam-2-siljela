import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { URL } from "../../constants/api";
import { Reserve } from "../reserve/Reserve";
import Button from 'react-bootstrap/Button';
import Column from '../content/Column';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Heading from '../content/Heading';
import styles from './Properties.module.css';
import BreadcrumbNavThree from '../content/BreadcrumbNavThree';
import Spinner from 'react-bootstrap/Spinner'

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
    return <div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
    </div>;
  }
  if (error) {
    return <div>The properties are currently unavailble. We apologise for the inconvenience. Please return to <a href="/">Homepage</a>.</div>;
  }

  const receivingReservation = () => {
    setDisplayReservationForm(true);
    document.location.href = "#reservationForm";
  };

  document.title = `${properties.name}`;

  return (
    <Container>
      <BreadcrumbNavThree secondLink="../browse" secondLinkText="Browse Properties" thirdLinkText={properties.name} />
      <Card className={styles.card}>
          <Card.Body>
            <div key={properties.id}>
              <Heading content={properties.name} url="../browse" buttonContent="Back to property overview"/>
              <Card.Text>
              <i class="fa fa-location-arrow" aria-hidden="true"></i> {properties.location}
              </Card.Text>
              <Card.Text><i class="fa fa-info-circle" aria-hidden="true"></i> {properties.description}</Card.Text>
              <Container>
                <hr/>
                <Column title="Pool" result={properties.pool ? 'Yes' : 'No'}/>
                <hr/>
                <Column title="Cleaning" result={properties.cleaning ? 'Yes' : 'No'}/>
                <hr/>
                <Column title="Parking" result={properties.parking ? 'Yes' : 'No'}/>
                <hr/>
                <Column title="Towels" result={properties.towels ? 'Yes' : 'No'}/>
                <hr/>
                <Column title="Breakfast" result={properties.breakfast ? 'Yes' : 'No'}/>
                <hr/>
              </Container>
              <Card.Text><p className={styles.price}><i class="fa fa-eur" aria-hidden="true"></i> {properties.price}</p></Card.Text>
              <Button
                size="lg" variant="light" 
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
          <a href="facebook.com" className={styles.share}>Share on Facebook <i class="fa fa-share" aria-hidden="true"></i></a>
      </Card>
      <img src={properties.img_url} className={styles.wrapper} alt="background"/>
    </Container>
  );
};

