import React from 'react';
import Button from '../../objects/Button';

function LoginForm() {
    return (
        <div>
            <input type="text">username</input>
            <input type="text">password</input>
            <Button text="Login" link="url"/>
        </div>
    )
}

export default LoginForm
