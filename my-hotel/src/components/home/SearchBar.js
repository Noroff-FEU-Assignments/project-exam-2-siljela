import { URL } from "../../constants/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import styles from './SearchBar.module.css';


export const SearchBar = () => {
    const [properties, setProperties] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(null);
    const [searchResults, sortedProperties] = useState([]);

    useEffect(() => {
        const propertyURL = `${URL}properties`;
        async function loadProperties() {
          try {
            const response = await fetch(propertyURL);
            if (response.ok) {
              const json = await response.json();
              setProperties(json);
            } else {
              setError("No results to view.");
            }
          } catch (error) {
            setError(error.toString());
          } finally {
            setLoad(false);
          }
        }
        loadProperties();
      }, []);
      if (load) {
        return <div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>;
      }
      if (error) {
        return <div>Unable to locate properties.</div>;
      }
    
      const searching = (e) => {
        const inputValue = e.target.value.trim().toLowerCase();
        const sorted = properties.filter((property) =>
          property.name.toLowerCase().includes(inputValue)
        );
        sortedProperties(sorted);
      };
    
      return (
        <>
        <InputGroup className={styles.search}>
            <InputGroup.Text><i class="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
            <FormControl onChange={(e) => searching(e)} placeholder="Search property name" aria-label="Search property name" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
          <ul>
            {searchResults.map((property) => {
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
                <>
                <Link to={`/properties/${id}`} className={styles.searchResult}>
                  <li 
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
                  >
                    {property.name}
                  </li>
                </Link>
                </>
              );
            })}
          </ul>
        </>
      );
    };