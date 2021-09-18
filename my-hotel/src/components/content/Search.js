import { URL } from "../../constants/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Search = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const propertyURL = `${URL}properties`;
    async function getProperties() {
      try {
        const response = await fetch(propertyURL);

        if (response.ok) {
          const json = await response.json();
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

  const handleChange = (e) => {
    const inputValue = e.target.value.trim().toLowerCase();
    const filtered = properties.filter((property) =>
      property.name.toLowerCase().includes(inputValue)
    );
    setFilteredProperties(filtered);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search by property name ..."
        onChange={(e) => handleChange(e)}
      />
      <ul className={`search-suggestion ${filteredProperties.length && "padding"}`}>
        {filteredProperties.map((property) => {
          let {
            id,
            name,
            location,
            descriptions,
            price,
            img_url,
          } = property;
          if (property.img_url === null) {
            img_url =
              "https://res.cloudinary.com/hb5n5nkav/image/upload/v1621779159/placeholder_ibkqxi.png";
          }
          return (
            <Link to={`/properties/${id}`}>
              <li
                key={property.id}
                id={id}
                img_url={img_url}
                name={name}
                location={location}
                description={descriptions}
                price={price}
              >
                {property.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};