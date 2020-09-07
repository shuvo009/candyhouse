import React, { Component } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { PanelEdit } from "../../../common/panelEdit";
import { ExprienceYearsCounter } from "./components/exprienceYearsCounter";
import { CompanyExprienceSummary } from "./components/companyExprienceSummary";

import { EducationEdit } from "./components/educationEdit";

import { SectionHeader } from "../../../common/sectionHeader"

import _ from "lodash";

import { IProfileStateModel, IProfileProps, IProfile, IExperience } from "../modes";
import { defaultProfileState, getProfile, changeBusyState, updateProfile } from "../profileStore";

import { getvalues } from "../defaultValues/valueStore";
import { IReducerState, BaseComponent } from "../../../helpers";

class ProfileExperienceEditComponent extends BaseComponent<IProfileProps, IProfileStateModel> {

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

    onAddNewExperience = (event: any) => {
        event.preventDefault();
        const newExperience: IExperience = {
            title: '',
            company: '',
            description: '',
            endDate: '',
            startDate: '',
            hideFromThisCompany: false,
            isCurrentlyWorking: false,
            techStack: [],
        };
        this.changeState({ experiences: [...this.state.experiences, newExperience] });
    }

    onExperienceRemove = (index: number) => {
        const experiences = [...this.state.experiences];
        experiences.splice(index, 1);
        this.changeState({ experiences: experiences });
    }

    onExperienceUpdate = (index: number, experience: IExperience) => {
        const experiences = [...this.state.experiences];
        experiences[index] = experience;
        this.changeState({ experiences: experiences });
    }


    render() {
        return (
            <PanelEdit title="Experience" className="mt-1 pr-0" isBusy={this.props.resumeStateModel.isBusy} onUpdateClick={() => { this.props.updateProfile(this.state) }}>
                <Row>
                    <Col md="10">
                        <ExprienceYearsCounter experience={3} onExperienceChange={(experience) => { this.changeState({ totalYearOfExperience: experience }) }} />
                        <div className="mt-2 mb-3">
                            <SectionHeader title="Professional experience"></SectionHeader>
                        </div>
                        {
                            this.state.experiences.map((experience, i) => {
                                return <div key={i}>
                                    <CompanyExprienceSummary index={i} experience={experience}
                                        mode={"education"} onExperienceRemove={this.onExperienceRemove}
                                        onExperienceUpdated={this.onExperienceUpdate} />
                                </div>

                            })
                        }

                        <div className="mt-1">
                            <a href="#" onClick={this.onAddNewExperience} className="font-size-small mt-2"><FontAwesomeIcon icon={faPlusCircle} /> Add Experience </a>
                        </div>
                        <div className="mt-2 mb-3">
                            <SectionHeader title="Education"></SectionHeader>
                        </div>
                        {/* <CompanyExprienceSummary></CompanyExprienceSummary> */}
                        <EducationEdit></EducationEdit>
                        <div className="mt-1">
                            <a href="#" className="font-size-small"><FontAwesomeIcon icon={faPlusCircle} /> Add Education </a>
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

export const ProfileExperienceEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileExperienceEditComponent);