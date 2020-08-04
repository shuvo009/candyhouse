import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import "./authencationLayout.scss"
export class AuthencationLayout extends Component {

    render() {
        const { children } = this.props;
        return (
            <div className="container">
                <div className="row auth-card justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-12 text-left">
                            <Card>
                                <Card.Body>
                                    {children}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}