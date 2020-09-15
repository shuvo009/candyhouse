import React, { Component } from "react";
import { LocalStorageHelper } from "../../helpers";
import { GoForLoginComponent } from "./components/goForLoginComponent";
import { ViewProfileComponent } from "./components/viewProfileComponent";
export class Home extends Component {

    render() {
        if (LocalStorageHelper.isUserAuthorized) {
            return (<ViewProfileComponent></ViewProfileComponent>)
        }
        return (<GoForLoginComponent></GoForLoginComponent>)
    }
}