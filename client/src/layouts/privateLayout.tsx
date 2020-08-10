import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { LocalStorageHelper, Routes } from "../helpers";
import { Redirect } from 'react-router-dom';
import { TopNav } from "../common/topNav"
export class PrivateLayout extends Component {
    render() {
        const { children } = this.props;
        if (LocalStorageHelper.isUserAuthorized) {
            return (
                <Container>
                    <TopNav></TopNav>
                    {children}
                </Container>)
        }
        return (<Redirect to={{ pathname: Routes.login }} />)
    }
}
