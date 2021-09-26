import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Column(props) {
    return (
        <Row>
            <Col>{props.title}</Col>
            <Col>{props.result}</Col>
        </Row>
    )
}

export default Column
