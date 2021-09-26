import React from 'react'
import styles from './SoMe.module.css';

function SoMe() {
    return (
        <div className={styles.some}>
            <a title="to facebook" href="facebook.com"><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
            <a title="to instagram" href="instagram.com"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
            <a title="to youtube"href="youtube.com"><i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a>
        </div>
    )
}

export default SoMe
