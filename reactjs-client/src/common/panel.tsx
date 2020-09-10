import React, { Component } from "react";
import { Card } from 'react-bootstrap';
export class Panel extends Component<IPanelProps> {
    render() {
        return (
            <>
                <Card className={this.props.className}>
                    <Card.Body>
                        <h3>{this.props.title}</h3>
                        <div className="mt-4">
                            {this.props.children}
                        </div>
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