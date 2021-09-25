import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './PropertyCardContent.module.css';

export const PropertyCardContent = ({
    id,
    name,
    location,
    img_url,
    description,
    price,
    onClick,
    buttonLink,
}) => {

  return (
            <div key={id}>
                <Card className={styles.card} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img_url} />
                    <Card.Body>
                        <Card.Title><i class="fa fa-bed" aria-hidden="true"></i>{name}</Card.Title>
                        <Card.Text><i class="fa fa-money" aria-hidden="true"></i>{price}</Card.Text>
                        <Card.Text><i class="fa fa-info-circle" aria-hidden="true"></i>{description}</Card.Text>
                        <Card.Text><i class="fa fa-location-arrow" aria-hidden="true"></i>{location}</Card.Text>
                        {/* <Button variant="primary"><a href={`/hotel/?id=${hotel.id}`}>Go somewhere</a></Button> */}
                        <Link to={buttonLink}>
                            <Button onClick={onClick} variant="light">
                            Book this property
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
  );
};