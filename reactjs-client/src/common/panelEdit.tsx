import React, { Component } from "react";
import { Card, Button, Spinner } from 'react-bootstrap';
export class PanelEdit extends Component<IPanelEditProps> {
    render() {
        return (
            <>
                <Card className={this.props.className}>
                    <Card.Body className="text-left p-profile-edit">
                        <h3>{this.props.title}</h3>
                        <hr />
                        <div className="mt-4">
                            {this.props.children}
                        </div>
                        <Button className="pl-4 pr-4 mt-4" disabled={this.props.isBusy} variant="primary" type="button"
                            onClick={this.props.onUpdateClick}>
                            {this.props.isBusy ? <Spinner animation="grow" size="sm" className="mr-2"></Spinner> : null}
                             Save
                        </Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

interface IPanelEditProps {
    title: string;
    isBusy: boolean;
    onUpdateClick(): void;
    className?: string;
}