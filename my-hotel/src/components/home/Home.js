import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from "../layout/Heading";
import styles from "./Home.module.css";
import IconItem from '../content/items/IconItem';
import tent from "../../images/tent.png";
import airballoon from "../../images/airballoon.png";
import parasol from "../../images/parasoll.png";
import { Search } from '../content/Search';


export const Home = () => {
    return (
        <>
            <main>
                <div className={styles.home}><Heading content="Accommodation for every traveler
                    B&amp;Bs, Motels &amp; Hotels" url="/browse" buttonContent="Browse properties">
                    <h2 className={styles.holidaze}>Holidaze</h2>
                </Heading></div>
                <Search />
                <Row className={`${"text-center"} ${styles.iconSection}`}>
                    <Col sm className={styles.iconContainer}><IconItem url={tent} description="camping" content="Camping &rsaquo;"/></Col>
                    <Col sm className={styles.iconContainer}><IconItem url={airballoon} description="airballoon" content="Explore &rsaquo;"/></Col>
                    <Col sm className={styles.iconContainer}><IconItem url={parasol} description="camping" content="Sunbath &rsaquo;"/></Col>
                </Row>
			    <Row>
                    <Col sm className={`${styles.village} ${styles.imageContainer}`}><a href="test">Village-stay in Italy &rsaquo;</a></Col>
                    <Col sm className={`${styles.tram} ${styles.imageContainer}`}><a href="test">Mountain-view in Spain &rsaquo;</a></Col>
                    <Col sm className={`${styles.beach} ${styles.imageContainer}`}><a href="test">white-sanded stay in France &rsaquo;</a></Col>
                    <Col sm className={`${styles.mountain} ${styles.imageContainer}`}><a href="test">City-stay in Portugal &rsaquo;</a></Col>
                </Row>
                <Row className={`${"text-center"} ${styles.mallorca}`}>
                    <a href="/browse" className={styles.mallorcaText}>
                        <h2>Book an apartment in Mallorca &rsaquo;</h2>
                        <p>Experience the sun, the beach and the atmosphere of Mallorca.</p>
                    </a>
                </Row>
            </main>
        </>
    )
}
