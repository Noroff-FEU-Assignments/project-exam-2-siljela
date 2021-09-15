import React from 'react'
import styles from './FooterLink.module.css';

function FooterLink(props) {
    return (
        <li className={styles.FooterLink}>
            <a href={props.url}>{props.content}</a>
        </li>
    )
}

export default FooterLink
