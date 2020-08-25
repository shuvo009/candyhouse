import React, { Component } from "react";
import { PanelEdit } from "../../../common/panelEdit"
import { SectionHeader } from "../../../common/sectionHeader"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { InputGroup, Row, Col, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
export class ProfileEditLocation extends Component {
    state = {
        positions: [
            { title: "Permanent (full-time)", value: "" },
            { title: "Part-time", value: "" },
            { title: "Contract / Freelance", value: "" },
            { title: "Intern", value: "" }
        ]
    }

    render() {
        return (
            <PanelEdit title="location">
                <Row>
                    <Col md="11">
                        <SectionHeader title="What type of employment are you looking for?*" />
                        <Row className="mt-3 mb-3">
                            {this.state.positions.map((position, i) => {
                                return (
                                    <Col key={i} md="4" className="mt-3">
                                        <Form.Check inline custom label={position.title} type="checkbox" id={i + 'id'} />
                                    </Col>
                                )
                            })}
                        </Row>
                        <SectionHeader title="When could you start a new opportunity? *" />
                        <Row className="mt-3 mb-3">
                            <Col md="6">
                                <Form.Check custom id="now" type="radio" label="Now" />
                                <Form.Check className="mt-2" custom id="noticeMon" type="radio" label="Upon completing my notice period" />
                                <Form.Control as="select" value="" className="mt-2 ml-3">
                                    <option value="" disabled={true}>Select notice period</option>
                                    <option value="1">1 month</option>
                                    <option value="2">2 months</option>
                                    <option value="3">3 months</option>
                                    <option value="4">4 months</option>
                                    <option value="5">5 months</option>
                                    <option value="6">6 months</option>
                                    <option value="7">7 months</option>
                                    <option value="8">8 months</option>
                                    <option value="9">9 months</option>
                                    <option value="10">10 months</option>
                                    <option value="11">11 months</option>
                                    <option value="12">12 months</option>
                                </Form.Control>
                                <Form.Check className="mt-2" custom id="specificDate" type="radio" label="After a specific date" />
                                <DatePicker className="mt-2 ml-3 form form-control"></DatePicker>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <SectionHeader title="Where would you like to work?*" />
                                <div className="mt-2">
                                    <Form.Check inline custom label="Dhaka" type="checkbox" id={"Dhaka" + 'id'} />
                                </div>
                            </Col>
                            <Col>
                                <SectionHeader title="What are your minimum salary expectations?*" />
                                <InputGroup className="mt-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl placeholder="min. salary for Dhaka" />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </PanelEdit>
        )
    }
}