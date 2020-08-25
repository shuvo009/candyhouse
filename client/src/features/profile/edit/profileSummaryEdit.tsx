import React, { Component } from "react";
import { PanelEdit } from "../../../common/panelEdit"
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



import 'draft-js/dist/Draft.css';
export class ProfileSummaryEdit extends Component<any, any> {
    state = {
        iAmDescription: 'Example answer: "I`m a backend developer with a passion for building meaningful products and more than 6 years of experience mostly in startups."',
        myStrongestSkillsDescription: 'Example answer: "My strengths lie within Rust and Ruby. I was lucky to work with some very knowledgeable senior developers at my first workplace. I have also had a lot of hands-on experience in recent years and have spent some time contributing to open source projects, as I care about giving back to the community."',
        WhatIAmLookingDescription: 'Example answer: "I`m looking for a backend developer position, or a full-stack position with a focus on backend. I`m open to trying new technologies but I`m highly experienced in Ruby. I would love to share my knowledge, potentially in a technical leadership role"',
        oneFactDescription: 'Example answer: "I`m really into crypto and blockchain. I`m a founding member of the Berlin Crypto Club (BCC) and any chance I get to talk crypto is a moment that I revel in!"',
        additionalInformationDescription: 'Feel free to add any extra information you`d like your new potential company to know.'
    }

    render() {
        return (
            <PanelEdit title="Summary">
                <ProfileSummaryItem title="I am..." description={this.state.iAmDescription} value="" onChange={(a) => { console.log(a) }}></ProfileSummaryItem>
                <ProfileSummaryItem title="My strongest skills and how I learned them..." description={this.state.myStrongestSkillsDescription} value="" onChange={(a) => { console.log(a) }}></ProfileSummaryItem>
                <ProfileSummaryItem title="What I am looking for..." description={this.state.WhatIAmLookingDescription} value="" onChange={(a) => { console.log(a) }}></ProfileSummaryItem>
                <ProfileSummaryItem title="One fact (outside of work) about me..." description={this.state.oneFactDescription} value="" onChange={(a) => { console.log(a) }}></ProfileSummaryItem>
                <ProfileSummaryItem title="Additional information" description={this.state.additionalInformationDescription} value="" onChange={(a) => { console.log(a) }}></ProfileSummaryItem>
            </PanelEdit>
        )
    }
}


class ProfileSummaryItem extends Component<IProfileSummaryItemProps> {
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
            </div>
        )
    }
}

interface IProfileSummaryItemProps {
    title: string;
    description: string;
    value: string;
    onChange(data: string): void;
}
