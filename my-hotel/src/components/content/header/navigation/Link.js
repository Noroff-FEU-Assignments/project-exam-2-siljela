import React from 'react'
import styles from "./Link.module.css"
import activeStyles from "./Active.module.css"


function Link(props) {
    
    let extraClass = null;

        if(props.variant === "active") {
            extraClass = activeStyles.active;
        }

    return (
        <li className={`${props.class} ${styles.navitem} ${extraClass}`}>{props.name}</li>
    )
}

export default Link
