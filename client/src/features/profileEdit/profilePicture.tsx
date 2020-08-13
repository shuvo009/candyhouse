import React, { Component } from "react";
import { Image, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
export class ProfilePicture extends Component {
    render() {
        return (
            <Row>
                <Col md="2">
                    <Image roundedCircle width={90} height={90} className="mr-3" src="https://via.placeholder.com/300/09f/fff.png" alt="name" />
                </Col>
                <Col>
                    <div className="mt-3">
                        <Button variant="outline-primary" className="pl-5 pr-5">Upload</Button>
                    </div>
                    <div className="mt-1 text-muted cursor-pointer">
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> <span className="ml-1">Delete Photo</span>
                    </div>

                </Col>
            </Row>
        )
    }
}