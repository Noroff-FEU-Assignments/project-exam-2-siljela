import React from 'react'
import SoMe from '../content/SoMe';
import Text from '../content/Text';
import styles from './Footer.module.css';
import FooterLink from '../content/FooterLink';
import List from '../content/List';

function FooterContent() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerLinks}>
                <List>
                    <FooterLink url="/browse" content="Browse properties &rsaquo;"/>
                    <FooterLink url="/browse" content="Book properties &rsaquo;"/>
                </List>
                <List>
                    <FooterLink url="/browse" content="Spain &rsaquo;"/>
                    <FooterLink url="/browse" content="Italy &rsaquo;"/>
                    <FooterLink url="/browse" content="France &rsaquo;"/>
                    <FooterLink url="/browse" content="Portugal &rsaquo;"/>
                </List>
                <List>
                    <FooterLink url="/admin" content="Admin &rsaquo;"/>
                    <FooterLink url="/admin" content="Add property &rsaquo;"/>
                    <FooterLink url="/admin" content="Log in &rsaquo;"/>
                </List>
            </div>
            <SoMe />
            <Text content="copyright @ silje" />
        </div>
    )
}

export default FooterContent
