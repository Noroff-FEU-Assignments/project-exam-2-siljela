import { useState, useEffect } from "react";
import { URL } from "../../constants/api";
import { HotelCard } from "./PropertyCard";

export const Browse = () => {
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [filteredHotels, setFilteredHotels] = useState([]);

	useEffect(function () {
		const hotelData = `${URL}hotels`;
		async function fetchData() {
			try {
				const response = await fetch(hotelData);

				if (response.ok) {
					const json = await response.json();
                    
					setHotels(json);
					setFilteredHotels(json);
				} else {
					setError("An error occured");
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
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>ERROR: An error occured</div>;
	}

	const handleClick = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	  };

	const handleData = (event) => {
	const inputValue = event.target.value.trim().toLowerCase();
	const filtered = hotels.filter((hotel) =>
		hotel.name.toLowerCase().includes(inputValue)
	);
	setFilteredHotels(filtered);
	};

return (
    <div>
      <header>
        <div>
          <h1>Hotels</h1>
        </div>
        <div>
          <p>Search for hotels</p>
          <input
            type="text"
            onChange={(e) => handleData(e)}
            placeholder="Search by hotel name ..."
          />
        </div>
      </header>
      <div>
        {filteredHotels.map((hotel) => {
          let {
			img_url,
			name,
			location,
			description,
			price,
			id,
          } = hotel;
          if (hotel.img_url === null) {
            img_url =
              "https://res.cloudinary.com/hb5n5nkav/image/upload/v1621779159/placeholder_ibkqxi.png";
          }
          return (
            <HotelCard
              key={id}
              id={id}
              img_url={img_url}
              name={name}
              location={location}
              description={description}
              price={price}
              onClick={() => handleClick()}
              buttonLink={`/book/?id=${hotel.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};