import React, { Component } from "react";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export class RichTextEditor extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            text: props.text
        }
    }

    render() {
        return (
            <CKEditor
                editor={ClassicEditor}
                config={{
                    toolbar: ['bold', 'italic', 'bulletedList', 'numberedList']
                }}
                data={this.state.text}
                onChange={(event: any, editor: any) => {
                    const data = editor.getData();
                    this.setState({
                        ...this.state,
                        text: data
                    });
                    this.props.onChange(data);
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
        );
    }
}

interface IProps {
    text: string;
    onChange(text: string): void;
}

interface IState {
    text: string;
}