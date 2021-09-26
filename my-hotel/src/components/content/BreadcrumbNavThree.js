import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import styles from './BreadcrumbNavigation.module.css';

function BreadcrumbNavThree(props) {
    return (
        <Breadcrumb>
            <Breadcrumb.Item className={styles.breadLink} href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item className={styles.breadLink} href={props.secondLink}>{props.secondLinkText}</Breadcrumb.Item>
            <Breadcrumb.Item active href={props.thirdLink}>
                {props.thirdLinkText}
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbNavThree
