import React from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';

import { RichTextEditor } from "../../../../common/richTextEditor";
import { SkillSelector } from "./skillSelector";
import { IExperience } from "../../modes";
import { BaseComponent } from "../../../../helpers";

export class CompanyExprienceEdit extends BaseComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            ...this.props.experience
        }
    }

    onDoneClick = () => {
        if (this.state.company && this.state.title) {
            this.props.onDoneClick(this.state);
        }
    }

    render() {
        return (
            <>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="Company" name="company" onChange={this.handleInputChange} value={this.state.company} />
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Title" name="title" onChange={this.handleInputChange} value={this.state.title} />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Row>
                            <Col className="pr-0">
                                <Form.Control placeholder="Start date" name="startDate" onChange={this.handleInputChange} value={this.state.startDate} />
                            </Col>
                            <Col md="auto" className="p-1 mt-1">
                                {
                                    !this.state.isCurrentlyWorking ?
                                        <span>-</span>
                                        : null
                                }
                            </Col>
                            <Col className="pl-0">
                                {
                                    !this.state.isCurrentlyWorking ?
                                        <Form.Control placeholder="End date" name="endDate" onChange={this.handleInputChange} value={this.state.endDate} />
                                        : null
                                }
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Form.Check id="isCurrentlyWorking" custom inline label="I currently working there" type="checkbox" name="isCurrentlyWorking" onChange={this.handleInputCheckedChanged} checked={this.state.isCurrentlyWorking} />
                        <Form.Check id="hideFromThisCompany" className="mt-1" custom inline label="Hide my profile from this company" type="checkbox" name="hideFromThisCompany" onChange={this.handleInputCheckedChanged} checked={this.state.hideFromThisCompany} />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <RichTextEditor text={this.state.description} onChange={(description) => { this.changeState({ description: description }) }} />
                    </Col>
                </Row>
                <div className="mt-2">
                    <SkillSelector skills={this.state.techStack} onChangeSkills={(skills) => { this.changeState({ techStack: skills }) }} />
                </div>
                <div className="mt-2 mb-2">
                    <Button size="sm" onClick={this.onDoneClick}>Done</Button>
                    <Button size="sm" variant="outline-primary" className="ml-2" onClick={this.props.onCancelClick}>Cancel</Button>
                </div>
            </>
        )
    }
}

interface IProps {
    experience: IExperience;
    onDoneClick(experience: IExperience): void;
    onCancelClick(): void;
}

interface IState extends IExperience {
}