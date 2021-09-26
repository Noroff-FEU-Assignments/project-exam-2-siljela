import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import styles from './BreadcrumbNavigation.module.css';

function BreadcrumbNavigation(props) {
    return (
        <Breadcrumb>
            <Breadcrumb.Item className={styles.breadLink} href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active href={props.currentPage}>
                {props.currentPageTitle}
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbNavigation
