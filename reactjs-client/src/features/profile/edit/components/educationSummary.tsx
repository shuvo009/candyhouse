import React from "react";
import { Row, Col, Button } from 'react-bootstrap';

import { IEducation } from "../../modes";
import { BaseComponent } from "../../../../helpers"
import { EducationEdit } from "../components/educationEdit";

export class EducationSummary extends BaseComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            isEditModel: !!!this.props.education.institute,
            ...this.props.education
        }
    }

    onEditDone = (education: IEducation) => {
        this.setState({
            ...this.state,
            ...education,
            isEditModel: false
        });
        this.props.onEducationUpdated(this.props.index, education);
    }

    onCancelClick = () => {
        if (this.state.institute) {
            this.setState({
                ...this.state,
                isEditModel: false
            });
        } else {
            this.props.onEducationRemove(this.props.index);
        }
    }

    render() {
        return (
            <>
                {
                    this.state.isEditModel ?
                        <EducationEdit education={this.state} onDoneClick={this.onEditDone} onCancelClick={this.onCancelClick} />
                        :
                        <Row className="border rounded m-0 p-2 mb-2">
                            <Col>
                                <p className="font-weight-semi-bold m-0">{this.state.degree}</p>
                                <p className="text-dark m-0 font-size-small">{this.state.institute}</p>
                                <p className="text-muted m-0 font-size-small">{this.state.startYear} - {
                                    this.state.isCurrentlyStudy ? 'OnGoing' : this.state.endYear
                                }</p>
                            </Col>
                            <Col>
                                <Button className="float-right p-0 text-dark" variant="link" onClick={() => { this.props.onEducationRemove(this.props.index) }}>Remove</Button>
                                <span className="float-right p-0 mr-1">-</span>
                                <Button className="float-right p-0 mr-1 text-dark" variant="link" onClick={() => { this.changeState({ isEditModel: true }) }}>Edit</Button>
                            </Col>
                        </Row>
                }
            </>
        )
    }
}

interface IProps {
    education: IEducation;
    onEducationRemove(index: number): void;
    onEducationUpdated(index: number, education: IEducation): void;
    index: number;
}

interface IState extends IEducation {
    isEditModel: boolean;
}
