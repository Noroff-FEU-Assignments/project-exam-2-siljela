import React from 'react'

function Link(props) {
    return (
        <a href={props.link}> 
            {props.title}
        </a>
    )
}

export default Link
