import React, { Component } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { SkillSelector } from "./skillsEditor"
import { RichTextEditor } from "../../../../common/richTextEditor"
import { IExperience } from "../../modes";

export class CompanyExprienceEdit extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            ...this.props.experience
        }
    }

    handleInputChange = (event: any) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    };

    handleInputChecked = (event: any) => {
        this.setState({
            ...this.state,
            [event.target.name]: !!event.target.checked
        })
    };

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
                                <span>-</span>
                            </Col>
                            <Col className="pl-0">
                                <Form.Control placeholder="End date" name="endDate" onChange={this.handleInputChange} value={this.state.endDate} />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Form.Check id="aaaa" custom inline label="I currently working there" type="checkbox" name="isCurrentlyWorking" onChange={this.handleInputChecked} checked={this.state.isCurrentlyWorking} />
                        <Form.Check className="mt-1" id="mup" custom inline label="Hide my profile from this company" type="checkbox" name="hideFromThisCompany" onChange={this.handleInputChecked} checked={this.state.hideFromThisCompany} />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <RichTextEditor text={this.state.description} onChange={(description) => { this.setState({ ...this.state, description: description }) }} />
                    </Col>
                </Row>
                <div className="mt-2">
                    <SkillSelector skills={this.state.techStack} onChangeSkills={(skills) => { this.setState({ ...this.state, techStack: skills }) }} />
                </div>
                <div className="mt-2">
                    <Button size="sm">Done</Button>
                    <Button size="sm" variant="outline-primary" className="ml-2">Cancel</Button>
                </div>
            </>
        )
    }
}

interface IProps {
    experience: IExperience
}

interface IState extends IExperience {
}