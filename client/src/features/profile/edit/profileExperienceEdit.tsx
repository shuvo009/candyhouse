import React, { Component } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { PanelEdit } from "../../../common/panelEdit"
import { SectionHeader } from "../../../common/sectionHeader"
import { SkillSelector } from "./components/skillsEditor"
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export class ProfileExperienceEdit extends Component {
    render() {
        return (
            <PanelEdit title="Experience">
                <Row>
                    <Col md="10">
                        <ExprienceYearsCounter></ExprienceYearsCounter>
                        <div className="mt-2 mb-3">
                            <SectionHeader title="Professional experience"></SectionHeader>
                        </div>
                        <CompanyExprienceSummary></CompanyExprienceSummary>
                        <CompanyExprienceEdit></CompanyExprienceEdit>
                        <div className="mt-1">
                            <a href="#" className="font-size-small mt-2"><FontAwesomeIcon icon={faPlusCircle} /> Add Experience </a>
                        </div>
                        <div className="mt-2 mb-3">
                            <SectionHeader title="Education"></SectionHeader>
                        </div>
                        <CompanyExprienceSummary></CompanyExprienceSummary>
                        <EducationEdit></EducationEdit>
                        <div className="mt-1">
                            <a href="#" className="font-size-small"><FontAwesomeIcon icon={faPlusCircle} /> Add Education </a>
                        </div>
                    </Col>
                </Row>
            </PanelEdit>

        )
    }
}

class ExprienceYearsCounter extends Component {
    render() {
        return (
            <>
                <SectionHeader title="Years of professional experience *" />
                <Row>
                    <Col md={6}>
                        <Form.Control type="range" max={10} min={0} step={1} />
                        <Row>
                            <Col>
                                <p className="text-muted text-left font-size-small">0</p>
                            </Col>
                            <Col>
                                <p className="text-muted text-center font-size-small">7 years</p>
                            </Col>
                            <Col>
                                <p className="text-muted text-right font-size-small">10</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        )
    }
}

class CompanyExprienceSummary extends Component {
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
            </>
        )
    }
}

class CompanyExprienceEdit extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="Company" />
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Position" />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Row>
                            <Col className="pr-0">
                                <Form.Control placeholder="Start date" />
                            </Col>
                            <Col md="auto" className="p-1 mt-1">
                                <span>-</span>
                            </Col>
                            <Col className="pl-0">
                                <Form.Control placeholder="End date" />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Form.Check id="aaaa" custom inline label="I currently working there" type="checkbox" />
                        <Form.Check className="mt-1" id="mup" custom inline label="Hide my profile from this company" type="checkbox" />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <CKEditor
                            editor={ClassicEditor}
                            config={{
                                toolbar: ['bold', 'italic', 'bulletedList', 'numberedList'],
                                height: 500,
                            }}

                            onChange={(event: any, editor: any) => {
                                const data = editor.getData();

                            }}
                            onInit={(editor: any) => {
                                editor.editing.view.change((writer: any) => {
                                    writer.setStyle(
                                        "height",
                                        "140px",
                                        editor.editing.view.document.getRoot()
                                    );
                                });
                            }}
                        />
                    </Col>
                </Row>
                <div className="mt-2">
                    <SkillSelector></SkillSelector>
                </div>
                <div className="mt-2">
                    <Button size="sm">Done</Button>
                    <Button size="sm" variant="outline-primary" className="ml-2">Cancel</Button>
                </div>
            </>
        )
    }
}

class EducationEdit extends Component {
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