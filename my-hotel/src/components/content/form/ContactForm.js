import React from 'react';
import Button from '../../objects/Button';
import Link from '../../objects/Link';

function ContactForm() {
    return (
        <div>
            <input type="text"></input>
            <input type="text"></input>
            <textarea></textarea>
            <Button text="Submit" link="url"/>
            <Link title="login as admin?" link="url"/>
        </div>
    )
}

export default ContactForm
