import React, { Component } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { PanelEdit } from "../../../common/panelEdit"
import { SectionHeader } from "../../../common/sectionHeader"
import { SkillSelector } from "./components/skillsEditor"
export class ProfileSkillEdit extends Component {
    render() {
        return (
            <PanelEdit title="Skills">
                <Row>
                    <Col md={9}>
                        <LanguageEdit />
                        <SkillEdit />
                    </Col>
                </Row>
            </PanelEdit>
        )
    }
}

class LanguageEdit extends Component {

    state = {
        languages: [{
            language: "English",
            level: "Conversational",
        }, {
            language: "Bangla",
            level: "Native",
        }]
    }

    render() {
        return (
            <>
                <SectionHeader title="Languages *" />
                <p className="font-size-small mt-2 mb-2">Which languages can you use to communicate with humans?</p>
                <Row>
                    <Col className="p-0 pr-1 pl-3">
                        <Form.Control as="select" className="float-left">
                            <option value="0..1">&lt; Bangla</option>
                            <option value="1..2">English</option>
                        </Form.Control>
                    </Col>
                    <Col md="3" className="p-0 pr-1">
                        <Form.Control as="select" className="float-left">
                            <option value="0..1">Basic</option>
                            <option value="1..2">Conversational</option>
                            <option value="2..4">Working proficiency</option>
                            <option value="4..6">Fluent</option>
                            <option value="6..8">Native</option>
                        </Form.Control>
                    </Col>
                    <Col className="p-0">
                        <Button>Add</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="tag-inline">
                            {this.state.languages.map((lan, i) => {
                                return (
                                    <span key={i} className="border rounded p-2 bg-light mt-1 mr-1 font-size-small">
                                        <span className="font-weight-bold">{lan.language}</span><span className="font-weight-bold">({lan.level})</span>
                                        <FontAwesomeIcon className="ml-2 text-muted" icon={faTimes} />
                                    </span>
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </>
        )

    }
}

class SkillEdit extends Component {
    render() {
        return (
            <div className="mt-5">
                <SectionHeader title="Skills *" />
                <p className="font-size-small mt-2 mb-0">Which languages can you use to communicate with machines?</p>
                <p className="font-size-small">Feel free to also add skills like: Angular, Scrum Master, Photoshop ...</p>
                <SkillSelector></SkillSelector>
            </div>
        )
    }
}