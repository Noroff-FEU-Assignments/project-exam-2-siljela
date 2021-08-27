import React from 'react'
import FooterLinks from './FooterLinks';
import SoMe from './SoMe';
import Text from '../../objects/Text';

function FooterContent() {
    return (
        <div>
            <FooterLinks>
                <li><a href="url">link</a></li>
                <li><a href="url">link</a></li>
            </FooterLinks>
            <FooterLinks>
                <li><a href="url">link</a></li>
                <li><a href="url">link</a></li>
                <li><a href="url">link</a></li>
                <li><a href="url">link</a></li>
            </FooterLinks>
            <FooterLinks>
                <li><a href="url">link</a></li>
                <li><a href="url">link</a></li>
                <li><a href="url">link</a></li>
            </FooterLinks>
            <SoMe />
            <Text content="copyright" />
        </div>
    )
}

export default FooterContent
