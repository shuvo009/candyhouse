import React from "react";
import { Form, Row, Col } from 'react-bootstrap';
import _ from "lodash";

import { SectionHeader } from "../../../../common/sectionHeader";
import { BaseComponent } from "../../../../helpers";

export class ExprienceYearsCounter extends BaseComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            experience: this.props.experience
        }
    }

    componentWillReceiveProps(nextProps: IProps) {
        const isEqual = _.isEqual(nextProps.experience, this.state.experience);
        if (!isEqual) {
            this.setState({
                experience: this.props.experience
            });
        }
    }

    onHandleInputChanged(data: any) {
        this.props.onExperienceChange(+data.experience);
    }

    render() {
        return (
            <>
                <SectionHeader title="Years of professional experience *" />
                <Row>
                    <Col md={6}>
                        <Form.Control type="range" value={this.state.experience} onChange={this.handleInputChange} max={this.props.max || 10} min={this.props.min || 0} step={this.props.step || 1} />
                        <Row>
                            <Col>
                                <p className="text-muted text-left font-size-small">{this.props.max || 0}</p>
                            </Col>
                            <Col>
                                <p className="text-muted text-center font-size-small">{this.state.experience} years</p>
                            </Col>
                            <Col>
                                <p className="text-muted text-right font-size-small">{this.props.max || 10}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        )
    }
}

interface IProps {
    experience: number;
    onExperienceChange(experience: number): void;
    max?: number;
    min?: number;
    step?: number;
}

interface IState {
    experience: number;
}