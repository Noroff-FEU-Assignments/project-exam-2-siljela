import React from 'react';
import styles from "./Grids.module.css"

function Grids(props) {
    return (
        <div className={styles.grid}>
            {props.children}
        </div>
    )
}

export default Grids;
