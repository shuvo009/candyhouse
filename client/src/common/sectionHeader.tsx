import React, { Component } from "react";
export class SectionHeader extends Component<IPanelEditProps> {
    render() {
        return (
            <strong className={this.props.className + 'text-dark font-size-small'}>{this.props.title}</strong>
        )
    }
}

interface IPanelEditProps {
    title: string;
    className?: string;
}