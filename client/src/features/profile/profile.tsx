import React, { Component } from "react";
import { Card, Row, Col, Image } from 'react-bootstrap';
import { ProfileHeader } from "./components/profileHeader"
import { ProfileAbout } from "./components/profileAbout"
export class Profile extends Component {

    render() {
        return (
            <>
                <ProfileHeader></ProfileHeader>
                <Row className="text-left mt-2">
                    <Col md="4">
                        <ProfileAbout></ProfileAbout>
                    </Col>
                    <Col className="pl-0">
                        
                    </Col>
                </Row>
            </>
        )
    }
}