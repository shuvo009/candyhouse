import React, { Component } from "react";
import { Row, Col, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { InboxHeader } from "./components/inboxHeader";

export class Inbox extends Component {
    render() {
        return (
        <>
            <InboxHeader></InboxHeader>
        </>
        )
    }
}
