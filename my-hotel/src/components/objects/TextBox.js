import React from 'react'

function TextBox(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default TextBox
