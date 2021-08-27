import React from 'react'

function ModifyAccommodation() {
    return (
        <div>
            <p>Hotel name</p>
            <input>{props.hotelname}</input>
            <p>City, country</p>
            <input>{props.location}</input>
            <p>Keywords</p>
            <input>{props.keywords}</input>
            <p>Price from</p>
            <input>{props.pricefrom}</input>
            <p>Description</p>
            <input>{props.description}</input>
            <p>Number of guests</p>
            <input>{props.noguests}</input>
            <p>Number of rooms</p>
            <input>{props.norooms}</input>
            <div>
                <p>Pool</p>
                <input type="radio" name="yes" value="yes"></input>
                <input type="radio" name="no" value="no"></input>
            </div>
            <div>
                <p>Parking</p>
                <input type="radio" name="yes" value="yes"></input>
                <input type="radio" name="no" value="no"></input>
            </div>
            <div>
                <p>Cleaning</p>
                <input type="radio" name="yes" value="yes"></input>
                <input type="radio" name="no" value="no"></input>
            </div>
            <div>
                <p>Breakfast</p>
                <input type="radio" name="yes" value="yes"></input>
                <input type="radio" name="no" value="no"></input>
            </div>
            <div>
                <p>Towels</p>
                <input type="radio" name="yes" value="yes"></input>
                <input type="radio" name="no" value="no"></input>
            </div>
            <div>
                <p>Linen</p>
                <input type="radio" name="yes" value="yes"></input>
                <input type="radio" name="no" value="no"></input>
            </div>
            <p>Rooms</p>
            <Button text="Add +" />
            <div>
                <img src={props.url}></img>
                <p>Roomname</p><input>{props.roomname}</input>
                <p>No of guests</p><input>{props.noguests}</input>
                <p>Price</p><input>{props.price}</input>
                <div>
                <p>Breakfast</p>
                    <input type="radio" name="yes" value="yes"></input>
                    <input type="radio" name="no" value="no"></input>
                </div>
            </div>
            <Button />
        </div>
    )
}

export default ModifyAccommodation
