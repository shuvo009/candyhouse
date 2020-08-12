import React, { Component } from "react";
import { Card } from 'react-bootstrap';
export class Panel extends Component<IPanelProps> {
    render() {
        return (
            <>
                <Card>
                    <Card.Body>
                        <h5>{this.props.title}</h5>
                        {this.props.children}
                    </Card.Body>
                </Card>
            </>
        )
    }
}

interface IPanelProps {
    title: string;
}