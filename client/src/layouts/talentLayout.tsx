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
                    <Col md="9" className="pr-0"> {children}</Col>
                    <Col md="3" className="text-left">
                        <TalentSideNav></TalentSideNav>
                    </Col>
                </Row>
            </PrivateLayout>
        )
    }
}
