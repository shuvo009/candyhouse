import React, { Component } from "react";

export class AuthencationLayout extends Component {

    render() {
        const { children } = this.props;
        return (
            <div>
                <h2>Auth</h2>
                {children}
            </div>
        )
    }
}