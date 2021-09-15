import React from 'react'
import styles from "./Heading.module.css"
import Button from 'react-bootstrap/Button'

function Heading(props) {

    return ( 
        <div className={`${styles.headline} ${styles.page}`}>
            {props.children}
            <h1>{props.content}</h1>
            <Button href={props.url} variant="primary">{props.buttonContent}</Button>{' '}
        </div>
    );
}

export default Heading
