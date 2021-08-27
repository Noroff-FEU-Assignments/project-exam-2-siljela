import React from 'react'

function Amenities(props) {
    return (
        <div>
            <div class="grid-item">{props.amenity}</div>
            <div class="grid-item">{props.truefalse}</div>
        </div>
    )
}

export default Amenities
