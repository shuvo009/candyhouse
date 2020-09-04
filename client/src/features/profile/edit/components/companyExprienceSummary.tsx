import React, { Component } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { CompanyExprienceEdit } from "./companyExprienceEdit";

export class CompanyExprienceSummary extends Component {
    render() {
        return (
            <>
                <div>
                    <Row className="border rounded m-0 p-2">
                        <Col>
                            <p className="font-weight-semi-bold m-0">Kaz Software</p>
                            <p className="text-dark m-0 font-size-small">Senior Software Engineer</p>
                            <p className="text-muted m-0 font-size-small">February 2014 - ongoing</p>
                        </Col>
                        <Col>
                            <Button className="float-right p-0 text-dark" variant="link">Remove</Button>
                            <span className="float-right p-0 mr-1">-</span>
                            <Button className="float-right p-0 mr-1 text-dark" variant="link">Edit</Button>
                        </Col>
                    </Row>
                </div>
                <Form.Check className="ml-4 mt-1" id="aa" custom inline label="I do not want to be visible to this company" type="checkbox" />

                <CompanyExprienceEdit></CompanyExprienceEdit>
            </>
        )
    }
}
