import React, { Component } from "react";
import { TopNav } from "../common/topNav"
import { Row, Col } from 'react-bootstrap';
import { PrivateLayout } from "./privateLayout"
import { TalentSideNav } from "../common/talentSideNav";
export class TalentLayout extends Component {
    render() {
        const { children } = this.props;
        return (
            <PrivateLayout>
                <TopNav></TopNav>
                <Row className="mt-2">
                    <Col> {children}</Col>
                    <Col md="auto" className="text-left">
                        <TalentSideNav></TalentSideNav>
                    </Col>
                </Row>
            </PrivateLayout>
        )
    }
}
