import React, { Component } from "react";
import { RichTextEditor } from "../../../../common/richTextEditor";

export class ProfileSummaryItem extends Component<IProfileSummaryItemProps> {
    render() {
        return (
            <div className="mb-3">
                <strong className="text-dark">{this.props.title}</strong>
                <div className="text-muted profile-header-text mb-2">
                    {this.props.description}
                </div>
                <RichTextEditor text={this.props.value} onChange={(data)=>{this.props.onChange(this.props.type, data)}}/>
            </div>
        )
    }
}

interface IProfileSummaryItemProps {
    title: string;
    description: string;
    value: string;
    type: string;
    onChange(type: string, description: string): void;
}
