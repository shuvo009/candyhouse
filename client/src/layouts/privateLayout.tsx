import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import { LocalStorageHelper, Routes } from "../helpers";
import { Redirect } from 'react-router-dom';
export class PrivateLayout extends Component {
    render() {
        const { children } = this.props;
        if (LocalStorageHelper.isUserAuthorized) {
            return (
                <Container>
                    {children}
                </Container>)
        }
        return (<Redirect to={{ pathname: Routes.login }} />)
    }
}
