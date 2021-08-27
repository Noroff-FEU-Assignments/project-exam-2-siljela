import React from 'react'

function RoomGrid(props) {
    return (
        <div>
            <img src={props.url} alt={props.description}></img>
            <div>
                <h3>{props.roomtype}</h3>
                <p>{props.nopeople}</p>
                <p>{props.breakfast}</p>
                <p>{props.price}</p>
            </div>
            <select>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
            </select>
        </div>
    )
}

export default RoomGrid
