import React, { Component } from "react";
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export class ProfileGithub extends Component<any, IProfileGithubState> {

    state = {
        languages: [
            { language: "C#", commitCount: "82 commits" },
            { language: "TypeScript", commitCount: "38 commits" },
            { language: "Dart", commitCount: "7 commits" },
        ],
        contributions: [
            {
                link: "https://github.com/shuvo009/aws-sam-typescript-webpack-boilerplate",
                name: "aws-sam-typescript-webpack-boilerplate",
                description: "AWS SAM Typescript Webpack Boilerplate",
                role: "Creator",
                rating: 9
            },
            {
                link: "https://github.com/shuvo009/xamarin-forms-HackerNewsClient",
                name: "xamarin-forms-HackerNewsClient",
                description: "HackerNewsClient",
                role: "Creator",
                rating: 9
            },
            {
                link: "https://github.com/shuvo009/nintex-url-shortening",
                name: "nintex-url-shortening",
                description: "",
                role: "Creator",
                rating: 9
            }
        ]
    }

    render() {
        return (
            <>
                <Card className="mt-2">
                    <Card.Body>
                        <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
                        <h5 className="mt-2">Contributions</h5>
                        {this.state.contributions.map((item, i) => {
                            return (
                                <div key={i}>
                                    <Row className="p-0">
                                        <Col md={9} className="text-truncate">
                                            <a href="#">{item.name}</a>
                                            <div className="text-truncate">{item.description}</div>
                                            <p className="text-muted mb-2">{item.role}</p>
                                        </Col>
                                        <Col md={3} className="text-muted text-right font-size-small">
                                            <span className="mr-1">{item.rating}</span>
                                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                        </Col>
                                    </Row>
                                    <hr className="m-0 mb-2" />
                                </div>
                            )
                        })}
                        <a href="#">Show More</a>
                        <h5 className="mt-4 mb-3">Languages</h5>
                        {this.state.languages.map((item, i) => {
                            return (
                                <div key={i}>
                                    <Row className="p-0">
                                        <Col className="text-truncate">
                                            <a href="#">{item.language}</a>
                                        </Col>
                                        <Col className="text-muted text-right font-size-small">
                                            <span className="mr-1">{item.commitCount}</span>
                                        </Col>
                                    </Row>
                                    {this.state.languages.length != (i + 1) ? <hr className="m-0 mb-2 mt-2" /> : null}
                                </div>
                            )
                        })}
                    </Card.Body>
                </Card>
            </>
        )
    }
}


interface IProfileGithubState {
    contributions: IContribution[]
    languages: ILanguage[]
}

interface IContribution {
    link: string;
    name: string;
    description: string;
    role: string;
    rating: number;
}

interface ILanguage {
    language: string;
    commitCount: string;
}