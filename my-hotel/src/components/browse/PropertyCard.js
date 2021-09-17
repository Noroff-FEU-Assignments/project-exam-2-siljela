import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const PropertyCard = ({
    img_url,
    name,
    location,
    description,
    price,
    id,
    onClick,
    buttonLink,
}) => {
  return (
    <div key={id}>
                <Card key={id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img_url} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{price}</Card.Text>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text><i className="fas fa-map-marker-alt"></i>{location}</Card.Text>
                        {/* <Button variant="primary"><a href={`/hotel/?id=${hotel.id}`}>Go somewhere</a></Button> */}
                        <Link to={buttonLink}>
                            <Button onClick={onClick}>
                            See details
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
  );
};

