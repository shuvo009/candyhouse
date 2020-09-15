import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import { Panel } from "../../../../common/panel"
import parse from "html-react-parser"
import { IProfileViewProps } from "../../modes";
export class ProfileExperience extends Component<IProfileViewProps> {
    
    render() {
        return (
            <>
                <Panel title="Work experience" className="mt-2">
                    <div className="clearfix">
                        {this.props.profile.experiences.map((item, i) => {
                            return (
                                <div key={i} className="experence">
                                    <Row>
                                        <Col className="text-left">
                                            <h4 className="title">{item.title}</h4>
                                            <span className="text-muted company">at {item.company}</span>
                                        </Col>
                                        <Col className="text-right">
                                            <span className="working-dates text-muted">{item.startDate} - {item.endDate}</span>
                                        </Col>
                                    </Row>
                                    <div>
                                        {parse(item.description)}
                                    </div>
                                    <Row className="mt-1">
                                        <Col>
                                            {item.techStack.map((skill, j) => {
                                                return (
                                                    <span key={j} className="skill-item">{skill}</span>
                                                )
                                            })}
                                        </Col>
                                    </Row>
                                    {this.props.profile.experiences.length != (i + 1) ? <hr /> : null}
                                </div>
                            )
                        })}
                    </div>
                </Panel>
            </>
        )
    }
}