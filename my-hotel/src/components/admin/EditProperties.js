import { useState, useEffect } from "react";
import { URL } from "../../constants/api";
import { PropertyCard } from "../browse/PropertyCard";
import Button from 'react-bootstrap/Button';
import { AddProperty } from "./AddProperty";

export const EditProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showProperty, setShowProperty] = useState(false);

  useEffect(() => {
    const propertiesURL = `${URL}properties`;
    async function propertiesInfo() {
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
    propertiesInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! An error occured</div>;
  }

  if (properties.length === 0) {
    return <div>There are no properties.</div>;
  }

  const saveProperty = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const openAdd = () => {
    setShowProperty(!showProperty);
  };
  return (
    <div>
      <div>
        <Button onClick={openAdd}>
          Add property
        </Button>
      </div>
      <div>
        {showProperty ? <AddProperty /> : ""}
      </div>
      <div>
        {properties.map((property) => {
          let {
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
          } = property;

          return (
            <PropertyCard
              key={id}
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
              onClick={() => saveProperty()}
              buttonLink={`properties/${id}`}
            />
          );
        })}
      </div>
    </div>
  );
};