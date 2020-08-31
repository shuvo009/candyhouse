import React, { Component } from "react";
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

export class ChatWriter extends Component {
    render() {
        return (
            <Row className="border-top py-2">
                <Col md={10}>
                    <InputGroup>
                        <FormControl as="textarea" placeholder="Type your message here..." />
                    </InputGroup>
                </Col>
                <Col md="auto">
                    <Button size="sm" variant="primary">Send</Button>
                </Col>
            </Row>
        )
    }
}
