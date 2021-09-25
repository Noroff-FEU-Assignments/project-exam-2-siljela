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
import { SearchBar } from "./SearchBar.js";

export const Home = () => {
    return (
        <>
                <main>
                    <div className={styles.home}><Heading content="Holidaze" secondTitle="
                        B&amp;Bs, Motels &amp; Hotels. Accommodation in Bergen, Hordaland." url="/browse" buttonContent="Browse properties">
                    </Heading></div>
                    <Row className={`${"text-center"} ${styles.iconSection} ${"g-0"}`}>
                        <Col sm className={styles.iconContainer}><IconItem url="/browse" imgUrl={tent} description="camping" content="Camping &rsaquo;"/></Col>
                        <Col sm className={styles.iconContainer}><IconItem url="/browse" imgUrl={airballoon} description="airballoon" content="Explore &rsaquo;"/></Col>
                        <Col sm className={styles.iconContainer}><IconItem url="/browse" imgUrl={parasol} description="camping" content="Sunbath &rsaquo;"/></Col>
                    </Row>
                    <Row className="g-0">
                        <Col md className={styles.imageContainer}>
                            <div className={`${styles.village} ${styles.image}`}></div>
                            <a href="/browse">Village-stay in Italy &rsaquo;</a>
                        </Col>
                        <Col md className={styles.imageContainer}>
                            <div className={`${styles.tram} ${styles.image}`}></div>
                            <a href="/browse">Mountain-view in Spain &rsaquo;</a>
                        </Col>
                        <Col md className={styles.imageContainer}>
                            <div className={`${styles.beach} ${styles.image}`}></div>
                            <a href="/browse">White-sanded stay in France &rsaquo;</a>
                        </Col>
                        <Col md className={styles.imageContainer}>
                            <div className={`${styles.mountain} ${styles.image}`}></div>
                            <a href="/browse">City-stay in Portugal &rsaquo;</a>
                        </Col>
                    </Row>
                    <Row className={`${"text-center"} ${styles.hordaland} ${"g-0"}`}>
                        <div className={styles.hordalandText}>
                            <h2>Book an apartment in Bergen &rsaquo;</h2>
                            <p>Experience the mountain, the weather and the atmosphere of Hordaland.</p>
                            <SearchBar />
                        </div>
                    </Row>
                    <div className={`${wrapperstyle.wrapper} ${wrapperstyle.homepage}`}></div>
                </main>
                
        </>
    )
}
