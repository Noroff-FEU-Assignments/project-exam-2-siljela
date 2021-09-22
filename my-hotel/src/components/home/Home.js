import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from "../layout/Heading";
import styles from "./Home.module.css";
import IconItem from '../content/items/IconItem';
import tent from "../../images/tent.png";
import airballoon from "../../images/airballoon.png";
import parasol from "../../images/parasoll.png";
import wrapperstyle from '../layout/wrapperstyle.module.css';


export const Home = () => {
    return (
        <>
                <main>
                    <div className={styles.home}><Heading content="Holidaze" secondTitle="
                        B&amp;Bs, Motels &amp; Hotels. Accommodation for all travelers." url="/browse" buttonContent="Browse properties">
                    </Heading></div>
                    <Row className={`${"text-center"} ${styles.iconSection}`}>
                        <Col sm className={styles.iconContainer}><IconItem url="/browse" imgUrl={tent} description="camping" content="Camping &rsaquo;"/></Col>
                        <Col sm className={styles.iconContainer}><IconItem url="/browse" imgUrl={airballoon} description="airballoon" content="Explore &rsaquo;"/></Col>
                        <Col sm className={styles.iconContainer}><IconItem url="/browse" imgUrl={parasol} description="camping" content="Sunbath &rsaquo;"/></Col>
                    </Row>
                    <Row>
                        <Col md className={styles.imageContainer}>
                            <div className={`${styles.village} ${styles.image}`}></div>
                            <a href="test">Village-stay in Italy &rsaquo;</a>
                        </Col>
                        <Col md className={styles.imageContainer}>
                            <div className={`${styles.tram} ${styles.image}`}></div>
                            <a href="test">Mountain-view in Spain &rsaquo;</a>
                        </Col>
                        <Col md className={styles.imageContainer}>
                            <div className={`${styles.beach} ${styles.image}`}></div>
                            <a href="test">White-sanded stay in France &rsaquo;</a>
                        </Col>
                        <Col md className={styles.imageContainer}>
                            <div className={`${styles.mountain} ${styles.image}`}></div>
                            <a href="test">City-stay in Portugal &rsaquo;</a>
                        </Col>
                        {/* <Col md className={`${styles.tram} ${styles.imageContainer}`}><a href="test">Mountain-view in Spain &rsaquo;</a></Col>
                        <Col md className={`${styles.beach} ${styles.imageContainer}`}><a href="test">white-sanded stay in France &rsaquo;</a></Col>
                        <Col md className={`${styles.mountain} ${styles.imageContainer}`}><a href="test">City-stay in Portugal &rsaquo;</a></Col> */}
                    </Row>
                    <Row className={`${"text-center"} ${styles.mallorca}`}>
                        <a href="/browse" className={styles.mallorcaText}>
                            <h2>Book an apartment in Mallorca &rsaquo;</h2>
                            <p>Experience the sun, the beach and the atmosphere of Mallorca.</p>
                        </a>
                    </Row>
                    <div className={`${wrapperstyle.wrapper} ${wrapperstyle.homepage}`}></div>
                </main>
                
        </>
    )
}
