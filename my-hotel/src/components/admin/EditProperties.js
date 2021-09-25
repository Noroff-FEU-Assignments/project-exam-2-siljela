import { useState, useEffect } from "react";
import { URL } from "../../constants/api";
import { PropertyCard } from "../browse/PropertyCard";
// import { AddProperty } from "./AddProperty";
import "../browse/Browse";
import Spinner from 'react-bootstrap/Spinner';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import styles from '../browse/Browse.module.css';

export const EditProperties = () => {
  const [properties, setProperties] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState([]);

  // const [showProperty, setShowProperty] = useState(false);

  useEffect(() => {
    const propertiesURL = `${URL}properties`;
    async function propertiesInfo() {
      try {
        const response = await fetch(propertiesURL);
        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setProperties(json);
					setFilteredProperties(json);
        } else {
          setError("An error occired");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoad(false);
      }
    }
    propertiesInfo();
  }, []);

  if (load) {
    return <div>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
    </div>;
  }
  if (error) {
    return <div>We were unable to load the properties. Please return to <a href="/">homepage</a>.</div>;
  }

  if (properties.length === 0) {
    return <div>There are no properties.</div>;
  }

  const saveProperty = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // const openAdd = () => {
  //   setShowProperty(!showProperty);
  // };


  const handleData = (event) => {
    const searchInput = event.target.value.trim().toLowerCase();
    const searchResult = properties.filter((property) =>
          property.name.toLowerCase().includes(searchInput)
    );
    setFilteredProperties(searchResult);
    };

  return (
    <div>
      {/* <div>
        <Button onClick={openAdd}>
          Add property
        </Button>
      </div> */}
      {/* <div>
        {showProperty ? <AddProperty /> : ""}
      </div> */}
      <InputGroup className={styles.search}>
        <InputGroup.Text><i class="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
        <FormControl onChange={(e) => handleData(e)} placeholder="Search property name" aria-label="Search property name" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      <div>
        {filteredProperties.map((property) => {
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