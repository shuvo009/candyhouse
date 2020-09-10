import React from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';

import { IEducation } from "../../modes";
import { BaseComponent } from "../../../../helpers";

export class EducationEdit extends BaseComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            ...this.props.education
        }
    }

    onDoneClick = () => {
        if (this.state.institute && this.state.degree) {
            this.props.onDoneClick(this.state);
        }
    }

    render() {
        return (
            <>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="University / school" name="institute" onChange={this.handleInputChange} value={this.state.institute} />
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Degree, field of study" name="degree" onChange={this.handleInputChange} value={this.state.degree} />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Row>
                            <Col className="pr-0">
                                <Form.Control placeholder="Start year" name="startYear" onChange={this.handleInputChange} value={this.state.startYear} />
                            </Col>

                            <Col md="auto" className="p-1 mt-1">
                                {
                                    !this.state.isCurrentlyStudy ?
                                        <span>-</span>
                                        : null
                                }
                            </Col>
                            <Col className="pl-0">
                                {
                                    !this.state.isCurrentlyStudy ?
                                        <Form.Control placeholder="End year" name="endYear" onChange={this.handleInputChange} value={this.state.endYear} />
                                        : null
                                }
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Form.Check id="xeer" custom inline label="I currently study there" type="checkbox" name="isCurrentlyStudy" onChange={this.handleInputCheckedChanged} checked={this.state.isCurrentlyStudy} />
                    </Col>
                </Row>
                <div className="mt-2 mb-2">
                    <Button size="sm" onClick={this.onDoneClick}>Done</Button>
                    <Button size="sm" variant="outline-primary" className="ml-2" onClick={this.props.onCancelClick}>Cancel</Button>
                </div>
            </>
        )
    }
}

interface IProps {
    education: IEducation;
    onDoneClick(education: IEducation): void;
    onCancelClick(): void;
}

interface IState extends IEducation {
}