import React, { Component } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./authencationLayout.scss"
export class AuthencationLayout extends Component {

    render() {
        const { children } = this.props;
        return (
            <Container>
                <Row className="auth-card justify-content-center align-items-center">
                    <Col md={6} className="text-left">
                        <Card>
                            <Card.Body>
                                {children}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row >
            </Container>
        )
    }
}