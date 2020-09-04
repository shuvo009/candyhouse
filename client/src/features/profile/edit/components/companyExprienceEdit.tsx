import React, { Component } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { SkillSelector } from "./skillsEditor"
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export class CompanyExprienceEdit extends Component {
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