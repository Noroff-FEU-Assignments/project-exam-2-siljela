import React from 'react'
import btnStyles from "./Button.module.css"

function Button(props) {

    let extraClass = null;

        if(props.variant === "round") {
            extraClass = btnStyles.round;
        } else {
            extraClass = btnStyles.square;
        }

    return (
        <a href={props.link}>
            <button className={extraClass}>
            {props.text}
            </button>
        </a>
    )
}

export default Button
