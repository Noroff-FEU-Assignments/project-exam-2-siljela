import React from 'react'
import styles from './IconItem.module.css';

function IconItem(props) {

    return (
        <div>
            <a href={props.url} className={styles.iconItem}>
                <img src={props.imgUrl} alt={props.description} className={styles.iconImage}></img>
                <h2>{props.content}</h2>
            </a>
        </div>
    )
}

export default IconItem
