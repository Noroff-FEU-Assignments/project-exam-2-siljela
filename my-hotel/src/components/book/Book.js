import React from 'react'
import Heading from "../layout/Heading";
import { API } from "../../constants/api";
import ReactDOMServer from 'react-dom/server';
import DisplayMessage from "../common/DisplayMessage.js";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from "react-bootstrap-floating-label";

function Book() {
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
    
            const container = document.querySelector(".book-container");

            container.innerHTML = ReactDOMServer.renderToString(
                
                <div style={{
                    backgroundImage: `url(${hotel.img_url})`,
                    backgroundRepeat: "no-repeat"
                  }}>
                    <Heading content={`${"Book your stay at "} ${hotel.name}`} url={`../hotel/?id=${hotel.id}`} buttonContent="Back to overview"/>
                                                                       
                    <Form>
                        <Form.Control size="lg" type="text" placeholder="Name" />
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                        />
                        <Form.Control type="date" name="checkindate" placeholder="Check-in date" />
                        <Form.Control type="date" name="checkoutdate" placeholder="Check-out date" />
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <Button type="submit">Submit form</Button>    
                    </Form>
                    </div>
                
            );
    
        } catch (error) {
            DisplayMessage("error", error, ".book-container");
            console.log("error");
        }
    })();

    return (
        <div className="book-container"></div>
    )
}

export default Book
