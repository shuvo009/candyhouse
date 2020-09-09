import React, { Component } from "react";

import { Form, Row, Col, Button } from 'react-bootstrap';
import { SectionHeader } from "../../../../common/sectionHeader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { ILanguage } from "../../modes";

export class LanguageEdit extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            userLanguage : props.userLanguage
        }
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
                            {this.state.userLanguage.map((lan, i) => {
                                return (
                                    <span key={i} className="border rounded p-2 bg-light mt-1 mr-1 font-size-small">
                                        <span className="font-weight-bold">{lan.name}</span><span className="font-weight-bold">({lan.level})</span>
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

interface IProps {
    languages: string[];
    languageFluency: string[];
    userLanguage: ILanguage[];
}
interface IState {
    userLanguage: ILanguage[];
}
