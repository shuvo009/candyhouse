import React, { Component } from "react";
import { Row, Col, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export class InboxBody extends Component {
    render() {
        return (
        <>
            <Col xs="auto" md="8" className="mx-auto my-0 border-left overflow-auto">
                {/* <ChatMine></ChatMine>
                <ChatDate></ChatDate>
                <ChatOther></ChatOther> */}              
            </Col>
        </>
        )
    }
}
