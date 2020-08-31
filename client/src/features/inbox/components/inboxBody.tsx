import React, { Component } from "react";
import { Row, Col, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { ChatMine } from "./chatMine";
import { ChatOther } from "./chatOther";
import { ChatWriter } from "./chatWriter";
import {  } from "../../../common/panel";

export class InboxBody extends Component {
    render() {
        var maxHeight = {
            height: "50vh",
            display: "block"
        }
        return (
            <Col xs="auto" md="8" className="mx-auto my-0 border-left">
                <div style={maxHeight} className="overflow-auto">
                    <ChatOther></ChatOther>
                    <ChatMine></ChatMine>
                    <ChatOther></ChatOther>
                    <ChatMine></ChatMine>
                    {/*<ChatDate></ChatDate> */}
                    <ChatOther></ChatOther>
                </div>
                <ChatWriter></ChatWriter>
            </Col>
        )
    }
}
