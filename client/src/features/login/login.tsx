import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
export class Login extends Component {
    render() {
        return (
            <div>
                <h2>Log in</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Button variant="primary" type="button">
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}