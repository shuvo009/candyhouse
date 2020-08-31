import React, { Component } from "react";
import { Row, Col, Image } from 'react-bootstrap';

export class ChatMine extends Component {
    render() {
        var color = {
            backgroundColor: "#e2e3e5"
        }
        return (
            <Row>
                <Col md={{ span: 8, offset: 2 }} className="p-3 my-2" style={color}>
                    It's been some times since we last spoke. I noticed that you now have an ongoing interview with some other persons. 
                    Best of luck for those interviews...!
                </Col>
                <Col md="auto" className="pt-2">
                    <Image roundedCircle width={23} height={23} className="" src="https://via.placeholder.com/300/09f/fff.png" alt="name" />
                    <p className="small text-center">You</p>
                </Col>
            </Row>
        )
    }
}
