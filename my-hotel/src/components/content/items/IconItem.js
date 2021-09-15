import React from 'react'
import styles from './IconItem.module.css';

function IconItem(props) {

    // let extraClass = null;

    //     if(props.variant === "four") {
    //         extraClass = fourStyles.four;
    //     }


    return (
        <div>
            <img src={props.url} alt={props.description} className={styles.iconImage}></img>
            <h2>{props.content}</h2>
        </div>
    )
}

export default IconItem
