import { useState, useEffect } from "react";
import { URL } from "../../constants/api";
import { PropertyCard } from "./PropertyCard";
import Heading from '../layout/Heading';
import BreadcrumbNavigation from '../content/items/BreadcrumbNavigation';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styles from './Browse.module.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import wrapperstyle from '../layout/wrapperstyle.module.css';

export const Browse = () => {

	const [properties, setProperties] = useState([]);
	const [load, setLoad] = useState(true);
	const [error, setError] = useState(null);
	const [filteredProperties, setFilteredProperties] = useState([]);

	useEffect(function () {
		const propertyData = `${URL}properties`;

		async function fetchData() {
			try {
				const response = await fetch(propertyData);

				if (response.ok) {
					const json = await response.json();
                    
					setProperties(json);
					setFilteredProperties(json);

				} else {
					setError("We were unable to load the properties.");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoad(false);
			}
		}
		fetchData();
	}, []);

	if (load) {
		return <div>Properties are loading..</div>;
	}

	if (error) {
		return <div>Unfortunately, we were unable to load the properties.</div>;
	}

	const handleClick = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	  };

	const handleData = (event) => {
	const searchInput = event.target.value.trim().toLowerCase();
	const searchResult = properties.filter((property) =>
        property.name.toLowerCase().includes(searchInput)
	);
	setFilteredProperties(searchResult);
	};

return (
    <>
            <Container>
                <BreadcrumbNavigation currentPage="Properties" currentPageTitle="Browse Properties"/>
                <Heading content="Properties" url="/" buttonContent="Back to homepage"/>
                <InputGroup className={styles.search}>
                    <InputGroup.Text><i class="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
                    <FormControl onChange={(e) => handleData(e)} placeholder="Search property name" aria-label="Search property name" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <Row>
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
                            onClick={() => handleClick()}
                            buttonLink={`properties/${id}`}
                        />
                    );
                    })}
                </Row>
            </Container>
            <div className={`${wrapperstyle.wrapper} ${wrapperstyle.browsepage}`}></div>
    </>
  );
};