import React from "react";
import { PropertyCardContent } from "./PropertyCardContent";
import Col from 'react-bootstrap/Col';
import styles from './PropertyCard.module.css';

export const PropertyCard = ({
    id,
    name,
    location,
    img_url,
    description,
    price,
    pool,
    cleaning,
    parking, 
    towels, 
    breakfast,
    onClick,
    buttonLink,
}) => {
  return (
      <Col className={styles.propertyCard}>
        <PropertyCardContent
        id={id}
        name={name}
        location={location}
        img_url={img_url}
        description={description}
        price={price}
        pool={pool}
        cleaning={cleaning}
        parking={parking}
        towels={towels}
        breakfast={breakfast}
        onClick={onClick}
        buttonLink={buttonLink}
        />
    </Col>
  );
};

