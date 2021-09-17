
import { useState, useEffect } from "react";
import { URL } from "../../constants/api";
import { PropertyCard } from "../browse/PropertyCard";
import Button from 'react-bootstrap/Button';
import { AddProperty } from "./AddProperty";

export const EditProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayAddProperty, setdisplayAddProperty] = useState(false);

  useEffect(() => {
    const propertiesURL = `${URL}hotels`;
    async function getProperties() {
      try {
        const response = await fetch(propertiesURL);
        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setProperties(json);
        } else {
          setError("An error occired");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getProperties();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! An error occured</div>;
  }

  if (properties.length === 0) {
    return <div className="empty-items">There are no properties.</div>;
  }

  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const openAddPropertyForm = () => {
    setdisplayAddProperty(!displayAddProperty);
  };
  return (
    <div>
      <div>
        <Button buttonStyle="btn--outline" onClick={openAddPropertyForm}>
          Add property
        </Button>
      </div>
      <div>
        {displayAddProperty ? <AddProperty /> : ""}
      </div>
      <div>
        {properties.map((property) => {
          let {
            img_url,
            name,
            location,
            description,
            price,
            id,
          } = property;

          if (property.img_url === null) {
            img_url =
              "https://res.cloudinary.com/hb5n5nkav/image/upload/v1621779159/placeholder_ibkqxi.png";
          }

          return (
            <PropertyCard
              key={id}
              id={id}
              img_url={img_url}
              name={name}
              location={location}
              description={description}
              price={price}
              onClick={() => handleClick()}
              buttonLink={`property/${id}`}
            />
          );
        })}
      </div>
    </div>
  );
};