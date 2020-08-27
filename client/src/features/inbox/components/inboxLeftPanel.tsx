import React, { Component } from "react";
import { Col, Image, ListGroup, Media } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export class InboxLeftPanel extends Component {
    render() {
        return (
        <>
            <Col md="4" className="m-0 p-0">
                <ListGroup variant="flush" className="mt-3">
                    <ListGroup.Item variant="secondary" className="p-0 border-bottom-0">
                        <Media className="mt-3">
                            <Image roundedCircle width={40} height={40} className="mr-3 ml-1" src="https://via.placeholder.com/300/09f/fff.png" alt="Name" />
                            <Media.Body>
                                <strong>Harry Potter</strong>
                                <p>Your Talent Success Advisor</p>
                            </Media.Body>
                        </Media>
                    </ListGroup.Item>

                    <ListGroup.Item className="p-3">
                        <p>Open Interview</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="p-3">
                        <p>
                            Closed Interviews (1)
                            <FontAwesomeIcon icon={faChevronUp} className="float-right mt-1"></FontAwesomeIcon>
                        </p>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </>
        )
    }
}
