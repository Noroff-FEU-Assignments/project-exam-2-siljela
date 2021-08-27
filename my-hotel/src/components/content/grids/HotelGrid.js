import React from 'react'
import Button from '../../Button';

function HotelGrid(props) {
    return (
        <div>
            <img src={props.url} alt={props.description}></img>
            <div>
            <h2>{props.name}</h2>
            <p>{props.location}</p>
            <p>{props.keywords}</p>
            <p>{props.price}</p>
            <a href="test">{props.link-to-id}</a>
            </div>
            <Button text="book now"/>
        </div>
    )
}

export default HotelGrid
