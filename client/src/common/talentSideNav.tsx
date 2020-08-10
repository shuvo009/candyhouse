import React, { Component } from "react";
import { Card, ListGroup, Button } from 'react-bootstrap';
export class TalentSideNav extends Component {
    render() {
        return (
            <>
                <Card border="0">
                    <ListGroup variant="flush">
                        <ListGroup.Item>  Your Profile is Complete 100%</ListGroup.Item>
                        <ListGroup.Item>Privacy</ListGroup.Item>
                        <ListGroup.Item>Basic Info</ListGroup.Item>
                        <ListGroup.Item>Summary</ListGroup.Item>
                        <ListGroup.Item>Ideal Roles</ListGroup.Item>
                        <ListGroup.Item>Location</ListGroup.Item>
                        <ListGroup.Item>Experience</ListGroup.Item>
                        <ListGroup.Item>Skills</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Button className="w-100 mt-2" variant="outline-primary">
                    View Profile
                </Button>
            </>
        )
    }
}