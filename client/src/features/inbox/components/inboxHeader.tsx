import React, { Component } from "react";
import { Row, Col, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export class InboxHeader extends Component {
    render() {
        return (
        <>
            <Card className="text-left small">
                <Card.Body className="py-0">
                    <Row>
                        <Col xs="12" sm="3" className="mx-auto my-0">
                            <div className="my-2">
                                <strong>Inbox</strong>
                                <FontAwesomeIcon icon={faCog} className="float-right mt-1"></FontAwesomeIcon>
                            </div>
                        </Col>
                        <Col xs="auto" sm="9" className="border-left mx-auto my-0">
                            <div className="my-2">
                                <Image roundedCircle width={23} height={23} className="mr-3" src="https://via.placeholder.com/300/09f/fff.png" alt="name" />
                                <strong>Tom Hardy</strong>
                                <span className="ml-5">Your Talent Success Advisor</span>
                            </div>
                        </Col>
                    </Row>    
                </Card.Body>
            </Card>
        </>
        )
    }
}
