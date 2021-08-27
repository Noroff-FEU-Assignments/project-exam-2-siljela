import React from 'react';
import styles from "./FourGrids.module.css"
import IconItem from './IconItem';

function FourGrids() {
    return (
        <div className={styles.module}>
            <IconItem url="test" description="test" variant="four"/>
            <IconItem url="test" description="test" variant="four"/>
            <IconItem url="test" description="test" variant="four"/>
            <IconItem url="test" description="test" variant="four"/>
        </div>
    )
}

export default FourGrids
