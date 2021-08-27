import React from "react";
import styles from "./HeadingContent.module.css"

function HeadingContent (props) {
    return (
        <div className={styles.header}>
            {props.children}
        <img src={props.url} alt={props.description}></img>
        </div>
        );
}

export default HeadingContent; 