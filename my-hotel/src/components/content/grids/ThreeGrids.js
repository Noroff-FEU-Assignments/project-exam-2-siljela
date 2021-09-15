import React from 'react';
import IconItem from './IconItem';
import styles from "./ThreeGrids.module.css"

function ThreeGrids() {
    return (
        <div className={styles.module}>
            <IconItem url="test" description="test" />
            <IconItem url="test" description="test" />
            <IconItem url="test" description="test" />
        </div>
    )
}

export default ThreeGrids
