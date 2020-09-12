import React from "react";
import { Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";

import { PanelEdit } from "../../../common/panelEdit"
import { LanguageEdit } from "./components/languageEdit";
import { SkillSelector } from "./components/skillSelector";
import { SectionHeader } from "../../../common/sectionHeader";
import { BaseEditComponent, mapDispatchToProps, mapStateToProps } from "./baseEditComponent";

export class ProfileSkillEditComponent extends BaseEditComponent {

    render() {
        return (
            <PanelEdit title="Skills" className="mt-1 pr-0" isBusy={this.props.resumeStateModel.isBusy} onUpdateClick={() => { this.props.updateProfile(this.state) }}>
                <Row>
                    <Col md={9}>
                        <LanguageEdit languages={this.props.valuesModel.languages} languageFluency={this.props.valuesModel.languageFluency} userLanguage={this.state.languages} onLanguageChanged={(languages) => { this.changeState({ languages: languages }) }} />

                        <div className="mt-5">
                            <SectionHeader title="Skills *" />
                            <p className="font-size-small mt-2 mb-0">Which languages can you use to communicate with machines?</p>
                            <p className="font-size-small">Feel free to also add skills like: Angular, Scrum Master, Photoshop ...</p>
                            <SkillSelector skills={this.state.skills} onChangeSkills={(skills) => { this.changeState({ skills: skills }) }} />
                        </div>
                    </Col>
                </Row>
            </PanelEdit>
        )
    }
}

export const ProfileSkillEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileSkillEditComponent);
