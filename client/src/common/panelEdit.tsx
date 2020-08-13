import React, { Component } from "react";
import { Card } from 'react-bootstrap';
export class PanelEdit extends Component<IPanelEditProps> {
    render() {
        return (
            <>
                <Card className={this.props.className}>
                    <Card.Body className="text-left p-profile-edit">
                        <h3>{this.props.title}</h3>
                        <hr/>
                        <div className="mt-4">
                            {this.props.children}
                        </div>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

interface IPanelEditProps {
    title: string;
    className?: string;
}