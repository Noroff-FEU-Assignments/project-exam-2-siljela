import React from 'react'
import styles from "./Nav.module.css"
import topStyles from "./TopNav.module.css"

function Nav(props) {

    let extraClass = null;

        if(props.variant === "top") {
            extraClass = topStyles.top;
        }

    return (
        <div>
            <ul className={`${styles.nav} ${extraClass}`}>
                {props.children}
            </ul>
        </div>
    )
}

export default Nav
