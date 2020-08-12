import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import { Panel } from "../../../common/panel"
import parse from "html-react-parser"
export class ProfileExperience extends Component<any, IProfileWorkExperienceState> {

    state = {
        items: [
            {
                title: "Senior Software Engineer",
                company: "KAZ Software",
                startDate: "February 2014",
                endDate: "ongoing",
                summary: "<ul><br><li> Lead one (1 year) US project and one (2 year) Dutch project.<span style='font-weight: bold;'><br></span><br></li><br><li>Designed dozens of software solutions driving continuous improvement to<br>processes, systems and work flow.<br><br></li><br><li>Mentored development teams in SDLC, different design patterns and other best practices. Ensured the release of premium-quality applications that provided intuitive and secure experience for users.<br><br></li><br><li>Developed a complex and fully dynamic spreadsheet for a web-based project.<br><br></li><br><li>Refactored a legacy web application and migrated into modern web application.</li></ul>",
                skills: ['.NET', 'Amazon web service (AWS)', 'Angular', 'ASP.NET Core']
            },
            {
                title: "Associate Software Engineer",
                company: "Codaroma",
                startDate: "February 2012",
                endDate: "oFebruary 2014",
                summary: "<ul><br><li>Developed an algorithm to generate sales report dynamically.<span style='font-weight: bold;'><br></span><br></li><br><li>Solved and improved Real-Time communication problem between server and client.</li><br></ul>",
                skills: ['MongoDB', 'Node.js', 'React', 'SQL Server', 'Typescript']
            },
        ]
    }

    render() {
        return (
            <>
                <Panel title="Work experience" className="mt-2">
                    <div className="clearfix">
                        {this.state.items.map((item, i) => {
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
                                        {parse(item.summary)}
                                    </div>
                                    <Row className="mt-1">
                                        <Col>
                                            {item.skills.map((skill, j) => {
                                                return (
                                                    <span key={j} className="skill-item">{skill}</span>
                                                )
                                            })}
                                        </Col>
                                    </Row>
                                    {this.state.items.length != (i + 1) ? <hr /> : null}
                                </div>
                            )
                        })}
                    </div>
                </Panel>
            </>
        )
    }
}

interface IProfileWorkExperienceState {
    items: IProfileWorkExperienceItem[];
}

interface IProfileWorkExperienceItem {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    summary: string;
    skills: string[];
}