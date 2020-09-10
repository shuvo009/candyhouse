import React, { Component } from "react";
import { Card, Row, Col, Image } from 'react-bootstrap';
import { ProfileHeader } from "./components/profileHeader"
import { ProfileAbout } from "./components/profileAbout"
import { ProfileIdeakRoles } from "./components/profileIdealRoles"
import { ProfileSummary } from "./components/profileSummary"
import { ProfileSkils } from "./components/profileSkils"
import { ProfileExperience } from "./components/profleExperience"
import { ProfileEducation } from "./components/profileEducation"
import { ProfileGithub } from "./components/profileGithub"
export class Profile extends Component {

    render() {
        return (
            <>
                <ProfileHeader></ProfileHeader>
                <Row className="text-left mt-2">
                    <Col md="4">
                        <ProfileAbout></ProfileAbout>
                        <ProfileGithub></ProfileGithub>
                    </Col>
                    <Col className="pl-0">
                        <ProfileIdeakRoles></ProfileIdeakRoles>
                        <ProfileSummary></ProfileSummary>
                        <ProfileSkils></ProfileSkils>
                        <ProfileExperience></ProfileExperience>
                        <ProfileEducation></ProfileEducation>
                    </Col>
                </Row>
                <div className="mb-5"></div>
            </>
        )
    }
}