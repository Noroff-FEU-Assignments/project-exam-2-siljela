import React from 'react';
import styles from './SubHeading.module.css';

function SubHeading(props) {
    return (
        <div>
            <h2 className={styles.subTitle}>{props.content}</h2>
        </div>
    )
}

export default SubHeading
