import { API } from "../../../constants/api";
import styles from './Hotel.module.css';
import ReactDOMServer from 'react-dom/server';
import DisplayMessage from "../../common/DisplayMessage.js";
import Table from 'react-bootstrap/Table';
import Heading from '../../layout/Heading';
import Button from 'react-bootstrap/Button';


function Hotel() {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    
    if (!id) {
        document.location.href = "/";
    }
    
    const hotelUrl = API + id;
    console.log(hotelUrl);

    (async function () {
        try {
            const response = await fetch(hotelUrl);
            const hotel = await response.json();
    
            document.title = hotel.name;
    
            const container = document.querySelector(".hotel-container");

            let linen = "";
            let towels = "";
            let parking = "";
            let pool = "";

            if(hotel.linen === true){
                linen = "Yes";
            } else {
                linen = "No";
            }

            if(hotel.towels === true){
                towels = "Yes";
            } else {
                towels = "No";
            }
            if(hotel.parking === true){
                parking = "Yes";
            } else {
                parking = "No";
            }
            if(hotel.pool === true){
                pool = "Yes";
            } else {
                pool = "No";
            }

            container.innerHTML = ReactDOMServer.renderToString(

                <div className={styles.hotelContainer} style={{
                    backgroundImage: `url(${hotel.img_url})`,
                    backgroundRepeat: "no-repeat"
                  }}>
                    <div className={styles.hotel}>
                        <Heading content={hotel.name} url="/browse" buttonContent="Back to overview"/>
                        <div>
                            <p>Description</p>
                            <p>Location: {hotel.location}</p>
                            <p>{hotel.description}</p>
                        </div>
                        <Table striped bordered hover className={styles.amentable}>
                        <thead>
                        <tr>
                            <th colSpan="2">Amenities</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Number of guests allowed</td>
                            <td>{hotel.numberofguests}</td>
                        </tr>
                        <tr>
                            <td>Number of rooms at the property</td>
                            <td>{hotel.numberofrooms}</td>
                        </tr>
                        <tr>
                            <td>Parking</td>
                            <td>{parking}</td>
                        </tr>
                        <tr>
                            <td>Pool</td>
                            <td>{pool}</td>
                        </tr>
                        <tr>
                            <td>Towels</td>
                            <td>{towels}</td>
                        </tr>
                        <tr>
                            <td>Linen</td>
                            <td>{linen}</td>
                        </tr>
                        </tbody>
                    </Table>
                    <div className="d-grid gap-2">
                        <Button size="lg" variant="primary"><a href={`/book/?id=${hotel.id}`}>Book</a></Button>
                    </div>
                </div>
              </div>
            );
    
        } catch (error) {
            DisplayMessage("error", error, ".hotel-container");
            console.log("error");
        }
    })();

    return (
        <div className="hotel-container"></div>
    )
}

export default Hotel;
