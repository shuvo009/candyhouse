import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../../helpers";

export class GoForLoginComponent extends Component {
    render() {
        return (
            <>
                <h4 className="text-center">You are not logged in</h4>
                <Link className="w-100 mt-2 btn btn-outline-primary" to={Routes.login}>
                    Login
                </Link>
            </>
        )
    }
}