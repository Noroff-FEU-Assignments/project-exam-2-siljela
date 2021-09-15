import React from "react";
import styles from "./HeaderContainer.module.css"

function HeaderContainer (props) {
    const pageTitle = document.querySelector("h1");
    return (
        <div className={styles.header}>
            {props.children}
        <img src={props.url} alt={props.description}></img>
        </div>
        );
}

export default HeaderContainer; 