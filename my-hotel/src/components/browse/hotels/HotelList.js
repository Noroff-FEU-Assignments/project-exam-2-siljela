import { useState, useEffect } from "react";
import { API } from "../../../constants/api";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function HotelList() {
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(API);

				if (response.ok) {
					const json = await response.json();
					console.log(json);
                    
					setHotels(json);
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

	return (
        hotels.map(hotel => (
            <>
				<Card key={hotel.id} style={{ width: '18rem' }}>
				<Card.Img variant="top" src={hotel.img_url} />
				<Card.Body>
					<Card.Title>{hotel.name}</Card.Title>
					<Card.Text>{hotel.description}</Card.Text>
					<Button variant="primary"><a href={`/hotel/?id=${hotel.id}`}>Go somewhere</a></Button>
				</Card.Body>
				</Card>
            </>
    ))
)

}

export default HotelList;