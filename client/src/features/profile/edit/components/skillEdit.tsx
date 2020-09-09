import React, { Component } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { SectionHeader } from "../../../../common/sectionHeader"
import { SkillSelector } from "../components/skillsEditor"
export class SkillEdit extends Component {
    render() {
        return (
            <div className="mt-5">
                <SectionHeader title="Skills *" />
                <p className="font-size-small mt-2 mb-0">Which languages can you use to communicate with machines?</p>
                <p className="font-size-small">Feel free to also add skills like: Angular, Scrum Master, Photoshop ...</p>
                <SkillSelector skills={[]} onChangeSkills={() => { }}></SkillSelector>
            </div>
        )
    }
}