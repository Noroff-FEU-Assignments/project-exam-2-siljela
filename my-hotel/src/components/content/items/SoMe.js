import React from 'react'
import styles from './Some.module.css';

function SoMe() {
    return (
        <div className={styles.some}>
            <a href="facebook.com"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
            <a href="instagram.com"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
            <a href="youtube.com"><i class="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a>
        </div>
    )
}

export default SoMe
