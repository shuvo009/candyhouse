import React, { Component } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { CompanyExprienceEdit } from "./companyExprienceEdit";
import { IExperience } from "../../modes";

export class CompanyExprienceSummary extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            isEditModel: !!!this.props.experience.company,
            experience: this.props.experience
        }
    }

    render() {
        return (
            <>
                {
                    this.state.isEditModel ?
                        <CompanyExprienceEdit experience={this.state.experience}></CompanyExprienceEdit>
                        :
                        <>
                            <div>
                                <Row className="border rounded m-0 p-2">
                                    <Col>
                                        <p className="font-weight-semi-bold m-0">{this.state.experience.company}</p>
                                        <p className="text-dark m-0 font-size-small">{this.state.experience.title}</p>
                                        <p className="text-muted m-0 font-size-small">{this.state.experience.startDate} - {
                                            this.state.experience.isCurrentlyWorking ? 'OnGoing' : this.state.experience.endDate
                                        }</p>
                                    </Col>
                                    <Col>
                                        <Button className="float-right p-0 text-dark" variant="link" onClick={() => { this.props.onExperienceRemove(this.props.index) }}>Remove</Button>
                                        <span className="float-right p-0 mr-1">-</span>
                                        <Button className="float-right p-0 mr-1 text-dark" variant="link">Edit</Button>
                                    </Col>
                                </Row>
                            </div>
                            <Form.Check className="ml-4 mt-1" id="aa" custom inline label="I do not want to be visible to this company" type="checkbox" />
                        </>
                }
            </>
        )
    }
}

interface IProps {
    mode: "work" | "education";
    experience: IExperience;
    onExperienceRemove(index: number): void;
    index: number;
}

interface IState {
    isEditModel: boolean;
    experience: IExperience;
}
