import React from "react";
import { Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import _ from "lodash";

import { PanelEdit } from "../../../common/panelEdit"
import { IReducerState, BaseComponent } from "../../../helpers";
import { IProfileStateModel, IProfileProps, IProfile, ILanguage } from "../modes";
import { defaultProfileState, getProfile, changeBusyState, updateProfile } from "../profileStore";
import { getvalues } from "../defaultValues/valueStore";
import { LanguageEdit } from "./components/languageEdit";
import { SkillSelector } from "./components/skillSelector";
import { SectionHeader } from "../../../common/sectionHeader";

export class ProfileSkillEditComponent extends BaseComponent<IProfileProps, IProfileStateModel> {

    constructor(props: IProfileProps) {
        super(props);
        this.state = props.resumeStateModel ? props.resumeStateModel : defaultProfileState;
    }

    async componentWillMount() {
        this.props.changeBusyState(true);

        await Promise.all([
            this.props.getProfile(this.props.resumeStateModel.lastPullTime),
            this.props.getValues(this.props.valuesModel.lastPullTime)
        ]);

        this.props.changeBusyState(false);
    }

    componentWillReceiveProps(nextProps: IProfileProps) {
        const isEqual = _.isEqual(nextProps.resumeStateModel, this.state);
        if (!isEqual) {
            this.setState({
                ...nextProps.resumeStateModel
            });
        }
    }

    onLanguageChange = (languages: ILanguage[]) => {
        this.setState({
            languages: languages
        })
    }

    onSkillChange = (skills: string[]) => {
        this.setState({
            skills: skills
        })
    }


    render() {
        return (
            <PanelEdit title="Skills" className="mt-1 pr-0" isBusy={this.props.resumeStateModel.isBusy} onUpdateClick={() => { this.props.updateProfile(this.state) }}>
                <Row>
                    <Col md={9}>
                        <LanguageEdit languages={this.props.valuesModel.languages} languageFluency={this.props.valuesModel.languageFluency} userLanguage={this.state.languages} onLanguageChanged={this.onLanguageChange} />

                        <div className="mt-5">
                            <SectionHeader title="Skills *" />
                            <p className="font-size-small mt-2 mb-0">Which languages can you use to communicate with machines?</p>
                            <p className="font-size-small">Feel free to also add skills like: Angular, Scrum Master, Photoshop ...</p>
                            <SkillSelector skills={this.state.skills} onChangeSkills={this.onSkillChange} />
                        </div>
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
