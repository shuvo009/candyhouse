import React, { Component } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';

export class EducationEdit extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="University / school" />
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Degree, field of study" />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Row>
                            <Col className="pr-0">
                                <Form.Control placeholder="Start year" />
                            </Col>
                            <Col md="auto" className="p-1 mt-1">
                                <span>-</span>
                            </Col>
                            <Col className="pl-0">
                                <Form.Control placeholder="End year" />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Form.Check id="xeer" custom inline label="I currently study there" type="checkbox" />
                    </Col>
                </Row>
                <div className="mt-2">
                    <Button size="sm">Done</Button>
                    <Button size="sm" variant="outline-primary" className="ml-2">Cancel</Button>
                </div>
            </>
        )
    }
}