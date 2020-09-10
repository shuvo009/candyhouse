import React, { Component } from "react";
import { Alert } from 'react-bootstrap';
export class ErrorMessage extends Component<IProp> {
    render() {
        if (this.props.message) {
            return (
                <Alert variant="danger" dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>{this.props.message}</p>
                </Alert>
            )
        }
        return (
            null
        )
    }
}

interface IProp {
    message: string
}