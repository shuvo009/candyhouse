import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import { Panel } from "../../../../common/panel"
import { IProfileViewProps } from "../../modes";
export class ProfileEducation extends Component<IProfileViewProps> {

    render() {
        return (
            <>
                <Panel title="Education" className="mt-2">
                    {this.props.profile.educations.map((item, i) => {
                        return (
                            <div key={i} className="experence">
                                <Row>
                                    <Col className="text-left">
                                        <h4 className="title">{item.degree}</h4>
                                        <span className="text-muted company">at {item.institute}</span>
                                    </Col>
                                    <Col className="text-right">
                                        <span className="working-dates text-muted">{item.startYear} - {item.endYear}</span>
                                    </Col>
                                </Row>
                            </div>
                        )
                    })}
                </Panel>
            </>
        )
    }
}