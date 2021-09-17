import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const HotelCardItem = ({
    img_url,
    name,
    location,
    description,
    price,
    id,
    onClick,
    buttonLink,
}) => {
//   const starImgURL = `https://school.super24.no/sage-img/${rating}.png`;

  return (
    // <div key={id}>
    //   <div>
    //     <img src={imgURL} alt="hotel" />
    //   </div>
    //   <div>
    //     <h2 className="hotel-name">{name}</h2>
    //     <h4>
    //       <i className="fas fa-map-marker-alt"></i> {location}
    //     </h4>
    //     <div className="rating">
    //       <img src={starImgURL} alt="rating" />
    //     </div>
    //     <p>{description}</p>
    //   </div>
    //   <div className="hotel-card-content-right">
    //     <div>{features}</div>
    //     <h2 className="price">NOK {price}</h2>
    //     <Link to={buttonLink}>
    //       <Button buttonStyle="btn--outline" onClick={onClick}>
    //         See details
    //       </Button>
    //     </Link>
    //   </div>
    // </div>
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