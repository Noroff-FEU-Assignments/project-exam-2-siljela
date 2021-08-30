import React from 'react'
import styles from "./Heading.module.css"

function Heading(props) {
    return <h1 className={styles.headline}>{props.content}</h1>;
}

export default Heading
