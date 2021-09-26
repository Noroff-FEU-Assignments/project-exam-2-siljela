import React from 'react'
import styles from "./Heading.module.css"
import Button from 'react-bootstrap/Button'

function Heading(props) {

    return ( 
        <div className={`${styles.headline} ${styles.page}`}>
            {props.children}
            <h1 className={styles.title}>{props.content}</h1>
            <h2 className={styles.secondTitle}>{props.secondTitle}</h2>
            <Button href={props.url} variant="light" className={styles.btn}>{props.buttonContent}</Button>
        </div>
    );
}

export default Heading
