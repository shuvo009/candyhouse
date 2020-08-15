import React, { Component } from "react";
import { Form, InputGroup, FormControl, Row, Col, Button } from 'react-bootstrap';
import { PanelEdit } from "../../common/panelEdit"
import { SectionHeader } from "../../common/sectionHeader"
import { ProfilePicture } from "./components/profilePicture"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export class ProfileBasicInfoEdit extends Component {
    render() {
        return (
            <PanelEdit title="Basic Info" className="mt-1 pr-0">
                <ProfilePicture></ProfilePicture>
                <hr />
                <Row>
                    <Col>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label className="font-weight-semi-bold">First name *</Form.Label>
                            <Form.Control type="text" placeholder="Jon" />
                        </Form.Group>

                        <Form.Group controlId="formGroupEmail">
                            <Form.Label className="font-weight-semi-bold">Location *</Form.Label>
                            <Form.Control type="text" placeholder="Jafrabad, Shonkor" />
                        </Form.Group>
                    </Col>
                    <Col>

                        <Form.Group controlId="formGroupEmail">
                            <Form.Label className="font-weight-semi-bold">Last name *</Form.Label>
                            <Form.Control type="email" placeholder="Dho" />
                        </Form.Group>

                        <Form.Group controlId="formGroupEmail">
                            <Form.Label className="font-weight-semi-bold">Phone *</Form.Label>
                            <Form.Control type="email" placeholder="+8801xxx-xxxxxx" />
                        </Form.Group>

                    </Col>
                </Row>
                <hr />
                <SectionHeader title="Your social links" />
                <Row className="mt-4">
                    <Col>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label className="font-weight-semi-bold">Github</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl placeholder="https://github.com/yourusername" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label className="font-weight-semi-bold">LinkedIn</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl placeholder="https://www.linkedin.com/in/yourusername" />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label className="font-weight-semi-bold">StackOverflow</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl placeholder="http://stackoverflow.com/users/1234/yourusername" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label className="font-weight-semi-bold">Portfolio Link</Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl placeholder="http(s)://yourwebsite.com" />
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
                <Button className="pl-4 pr-4 mt-4">Save</Button>
            </PanelEdit>
        )
    }
}