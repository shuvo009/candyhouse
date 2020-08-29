
import React, { Component } from "react";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export class ProfileSummaryItem extends Component<IProfileSummaryItemProps> {
    render() {
        return (
            <div className="mb-3">
                <strong className="text-dark">{this.props.title}</strong>
                <div className="text-muted profile-header-text mb-2">
                    {this.props.description}
                </div>
                <CKEditor
                    editor={ClassicEditor}
                    config={{
                        toolbar: ['bold', 'italic', 'bulletedList', 'numberedList'],
                        height: 500,
                    }}
                    data={this.props.value}
                    onChange={(event: any, editor: any) => {
                        const data = editor.getData();
                        this.props.onChange(this.props.type, data);
                    }}
                    onInit={(editor: any) => {
                        editor.editing.view.change((writer: any) => {
                            writer.setStyle(
                                "height",
                                "140px",
                                editor.editing.view.document.getRoot()
                            );
                        });
                    }}
                />
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
