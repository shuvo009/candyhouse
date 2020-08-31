import React, { Component } from "react";
import { Row, Col, Image } from 'react-bootstrap';

export class ChatMine extends Component {
    render() {
        var color = {
            backgroundColor: "#cce5ff",
          }
        return (
            <Row>
                <Col md="auto" className="pt-2">
                    <Image roundedCircle width={23} height={23} className="" src="https://via.placeholder.com/300/09f/fff.png" alt="name" />
                </Col>
                <Col md={8} className="p-3 my-2" style={color}>
                    Hi, I am your Talent Success Advisor. How can I help you? Hello world! who's there...?
                </Col>
            </Row>
        )
    }
}
