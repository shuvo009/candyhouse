import React, { Component } from "react";
import { Card, Media, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export class ProfileHeader extends Component {

    render() {
        return (
            <>
                <Card className="text-left">
                    <Card.Body>
                        <Row>
                            <Col md="2">
                                <Image roundedCircle width={128} height={128} className="mr-3" src="https://via.placeholder.com/300/09f/fff.png" alt="name" />
                            </Col>
                            <Col md="6">
                                <h5>Md Hasanuzzaman</h5>
                                <p className="text-muted m-0 profile-header-text">
                                    .NET and JavaScript Fullstack Engineer, Focused on Backend,
                                    Skilled in Node.js and Angular
                                </p>
                                <p className="text-dark m-0 mt-1">
                                    Dhaka, Bangladesh
                                </p>
                                <div className="mt-2 profile-header-media">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faGithub} className="float-left mr-3"></FontAwesomeIcon>
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faLinkedinIn} className="float-left mr-3"></FontAwesomeIcon>
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faStackOverflow} className="float-left mr-3"></FontAwesomeIcon>
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faGlobe} className="float-left mr-3"></FontAwesomeIcon>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </>
        )
    }
}