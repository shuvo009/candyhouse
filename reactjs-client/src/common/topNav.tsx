import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Routes, LocalStorageHelper } from "../helpers";

export class TopNavComponent extends Component<any> {

    onLogout = (event: any) => {
        event.preventDefault()
        LocalStorageHelper.clear();
        this.props.goToLogin();
    }

    render() {
        return (
            <Navbar bg="white">
                <Navbar.Brand href="#home">CandyHouse</Navbar.Brand>
                <Nav className="justify-content-end ml-auto">
                    <NavDropdown title="Profile" id="basic-nav-dropdown">
                        <Link to={"/profile"} className="dropdown-item">My Profile</Link>
                        <Link to={"/profile-edit-basic-info"} className="dropdown-item">Edit Profile</Link>
                    </NavDropdown>
                    <Nav.Link href="javascript:void(0)" onClick={this.onLogout}>Sign Out</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        goToLogin: () => dispatch(push(Routes.login)),
    }
}

export const TopNav = connect(
    null,
    mapDispatchToProps
)(TopNavComponent);
