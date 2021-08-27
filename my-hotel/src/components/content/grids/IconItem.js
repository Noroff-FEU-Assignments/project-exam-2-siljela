import React from 'react'
import fourStyles from "./IconItem.module.css"

function IconItem(props) {

    let extraClass = null;

        if(props.variant === "four") {
            extraClass = fourStyles.four;
        }


    return (
        <div>
            <p className={extraClass}>test</p>
            <img src={props.url} alt={props.description}></img>
        </div>
    )
}

export default IconItem
