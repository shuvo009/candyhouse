import React, { Component } from "react";
import { Card } from 'react-bootstrap';
export class Panel extends Component<IPanelProps> {
    render() {
        return (
            <>
                <Card className={this.props.className}>
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
    className?: string;
}