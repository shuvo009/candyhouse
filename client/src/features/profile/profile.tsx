import React, { Component } from "react";
import { Card, Row, Col, Image } from 'react-bootstrap';
import { ProfileHeader } from "./components/profileHeader"
import { ProfileAbout } from "./components/profileAbout"
import { ProfileIdeakRoles } from "./components/profileIdealRoles"
import { ProfileSummary } from "./components/profileSummary"
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
                        <ProfileIdeakRoles></ProfileIdeakRoles>
                        <ProfileSummary></ProfileSummary>
                    </Col>
                </Row>
            </>
        )
    }
}