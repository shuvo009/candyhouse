import React from "react";
import { Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import { PanelEdit } from "../../../common/panelEdit"
import { IReducerState, BaseComponent } from "../../../helpers";

import { IProfileStateModel, IProfileProps, IProfile, IExperience, IEducation } from "../modes";
import { defaultProfileState, getProfile, changeBusyState, updateProfile } from "../profileStore";
import { getvalues } from "../defaultValues/valueStore";
import { LanguageEdit } from "./components/languageEdit";
import { SkillEdit } from "./components/skillEdit";

export class ProfileSkillEditComponent extends BaseComponent<IProfileProps, IProfileStateModel> {
    render() {
        return (
            <PanelEdit title="Skills" className="mt-1 pr-0" isBusy={this.props.resumeStateModel.isBusy} onUpdateClick={() => { this.props.updateProfile(this.state) }}>
                <Row>
                    <Col md={9}>
                        <LanguageEdit languages={this.props.valuesModel.languages} languageFluency={this.props.valuesModel.languageFluency} userLanguage={this.props.resumeStateModel.languages} />
                        <SkillEdit />
                    </Col>
                </Row>
            </PanelEdit>
        )
    }
}

const mapStateToProps = (state: IReducerState) => {
    return {
        resumeStateModel: { ...state.profileResucer },
        valuesModel: { ...state.valueReducer }
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProfile: (lastUpdate: number) => dispatch(getProfile(lastUpdate)),
        getValues: (lastUpdate: number) => dispatch(getvalues(lastUpdate)),
        changeBusyState: (state: boolean) => dispatch(changeBusyState(state)),
        updateProfile: (resume: IProfile) => dispatch(updateProfile(resume)),
    }
}

export const ProfileSkillEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileSkillEditComponent);
