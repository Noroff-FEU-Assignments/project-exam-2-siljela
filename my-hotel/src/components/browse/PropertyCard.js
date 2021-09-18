import React from "react";
import { HotelCardItem } from "./HotelCardItem";

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
    <HotelCardItem
    id={id}
    img_url={img_url}
    name={name}
    location={location}
    description={description}
    price={price}
    onClick={onClick}
    buttonLink={buttonLink}
  />
  );
};

