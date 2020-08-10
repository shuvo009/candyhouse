import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
export class TopNav extends Component {
    render() {
        return (
            <Navbar bg="white">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="justify-content-end ml-auto">
                    <NavDropdown title="Profile" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Edit Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Inverview Invites</Nav.Link>
                    <Nav.Link href="#features">Inbox</Nav.Link>
                    <Nav.Link href="#pricing">Sign Out</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}