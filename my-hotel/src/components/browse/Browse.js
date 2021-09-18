import { useState, useEffect } from "react";
import { URL } from "../../constants/api";
import { PropertyCard } from "./PropertyCard";
import Heading from '../layout/Heading';

export const Browse = () => {

	const [properties, setProperties] = useState([]);
	const [loading, setLoading] = useState(true);
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
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	if (loading) {
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
    <div>
        <Heading />
      <div>
          <p>Search for properties</p>
          <input
            type="text"
            onChange={(e) => handleData(e)}
            placeholder="Search property name here.."
          />
      </div>
      <div>
        {filteredProperties.map((property) => {
          let {
			img_url,
			name,
			location,
			description,
			price,
			id,
          } = property;
        //   if (property.img_url === null) {
        //     img_url =
        //       "https://res.cloudinary.com/hb5n5nkav/image/upload/v1621779159/placeholder_ibkqxi.png";
        //   }
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
              buttonLink={`/properties/?id=${property.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};