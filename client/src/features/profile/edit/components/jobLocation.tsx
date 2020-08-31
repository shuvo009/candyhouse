import React, { Component } from "react";
import { InputGroup, Row, Col, Form, FormControl } from 'react-bootstrap';
import { SectionHeader } from "../../../../common/sectionHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

export class JobLocation extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col>
                        <SectionHeader title="Where would you like to work?*" />
                    </Col>
                    <Col>
                        <SectionHeader title="What are your minimum salary expectations?*" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="mt-2">
                            <Form.Check inline custom label="Dhaka" type="checkbox" id={"Dhaka" + 'id'} />
                        </div>
                    </Col>
                    <Col>
                        <InputGroup className="mt-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl placeholder="min. salary for Dhaka" />
                        </InputGroup>
                    </Col>
                </Row>
            </>
        )
    }
}