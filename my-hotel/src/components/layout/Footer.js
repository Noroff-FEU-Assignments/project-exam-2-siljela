import React from 'react'
import SoMe from '../items/SoMe';
import Text from '../items/Text';

function FooterContent() {
    return (
        <div>
            <ul>
                <li><a href="url">link</a></li>
                <li><a href="url">link</a></li>
            </ul>
            <ul>
                <li><a href="url">link</a></li>
                <li><a href="url">link</a></li>
                <li><a href="url">link</a></li>
                <li><a href="url">link</a></li>
            </ul>
            <ul>
                <li><a href="url">link</a></li>
                <li><a href="url">link</a></li>
                <li><a href="url">link</a></li>
            </ul>
            <SoMe />
            <Text content="copyright" />
        </div>
    )
}

export default FooterContent
