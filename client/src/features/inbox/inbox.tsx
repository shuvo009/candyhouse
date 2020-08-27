import React, { Component } from "react";
import { Row, Card } from 'react-bootstrap';
import { InboxHeader } from "./components/inboxHeader";
import { InboxLeftPanel } from './components/inboxLeftPanel';
import { InboxBody } from "./components/inboxBody";

export class Inbox extends Component {
    render() {
        return (
        <>
            <InboxHeader></InboxHeader>
            <Card className="text-left small">
                <Card.Body className="py-0">
                    <Row>
                        <InboxLeftPanel></InboxLeftPanel>
                        <InboxBody></InboxBody>
                    </Row>    
                </Card.Body>
            </Card>
        </>
        )
    }
}
