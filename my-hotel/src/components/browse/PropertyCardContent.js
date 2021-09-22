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
    // pool,
    // cleaning,
    // parking, 
    // towels, 
    // breakfast,
    onClick,
    buttonLink,
}) => {

  return (
            <div key={id}>
                <Card className={styles.card} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img_url} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{price}</Card.Text>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>{location}</Card.Text>
                        {/* <Button variant="primary"><a href={`/hotel/?id=${hotel.id}`}>Go somewhere</a></Button> */}
                        <Link to={buttonLink}>
                            <Button onClick={onClick}>
                            Book this property
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
  );
};