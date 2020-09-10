import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import { Panel } from "../../../../common/panel"
export class ProfileEducation extends Component<any, IProfileEducationState> {

    status = {
        items: [
            { university: "State University of Bangladesh", subject: "Computer Science and Engineering", startYear: "2009", endYear: "2012" },
        ]
    }

    render() {
        return (
            <>
                <Panel title="Education" className="mt-2">
                    {this.status.items.map((item, i) => {
                        return (
                            <div key={i} className="experence">
                                <Row>
                                    <Col className="text-left">
                                        <h4 className="title">{item.university}</h4>
                                        <span className="text-muted company">at {item.subject}</span>
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


interface IProfileEducationState {
    items: IProfileEducationItem[]
}

interface IProfileEducationItem {
    university: string;
    subject: string;
    startYear: string;
    endYear: string;
}