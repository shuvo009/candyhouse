import React from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { CompanyExprienceEdit } from "./companyExprienceEdit";
import { IExperience } from "../../modes";
import { BaseComponent } from "../../../../helpers"

export class CompanyExprienceSummary extends BaseComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            isEditModel: !!!this.props.experience.company,
            ...this.props.experience
        }
    }

    onEditDone = (experience: IExperience) => {
        this.setState({
            ...this.state,
            ...experience,
            isEditModel: false
        });
        this.props.onExperienceUpdated(this.props.index, experience);
    }

    onCancelClick = () => {
        if (this.state.company) {
            this.setState({
                ...this.state,
                isEditModel: false
            });
        } else {
            this.props.onExperienceRemove(this.props.index);
        }
    }

    render() {
        return (
            <>
                {
                    this.state.isEditModel ?
                        <CompanyExprienceEdit experience={this.state} onDoneClick={this.onEditDone} onCancelClick={this.onCancelClick} />
                        :
                        <>
                            <div>
                                <Row className="border rounded m-0 p-2">
                                    <Col>
                                        <p className="font-weight-semi-bold m-0">{this.state.company}</p>
                                        <p className="text-dark m-0 font-size-small">{this.state.title}</p>
                                        <p className="text-muted m-0 font-size-small">{this.state.startDate} - {
                                            this.state.isCurrentlyWorking ? 'OnGoing' : this.state.endDate
                                        }</p>
                                    </Col>
                                    <Col>
                                        <Button className="float-right p-0 text-dark" variant="link" onClick={() => { this.props.onExperienceRemove(this.props.index) }}>Remove</Button>
                                        <span className="float-right p-0 mr-1">-</span>
                                        <Button className="float-right p-0 mr-1 text-dark" variant="link" onClick={() => { this.changeState({ isEditModel: true }) }}>Edit</Button>
                                    </Col>
                                </Row>
                            </div>
                            <Form.Check className="ml-4 mt-1" id="hideFromThisCompany" name="hideFromThisCompany" custom inline label="I do not want to be visible to this company" type="checkbox" onChange={this.handleInputCheckedChanged} />
                        </>
                }
            </>
        )
    }
}

interface IProps {
    experience: IExperience;
    onExperienceRemove(index: number): void;
    onExperienceUpdated(index: number, experience: IExperience): void;
    index: number;
}

interface IState extends IExperience {
    isEditModel: boolean;
}
