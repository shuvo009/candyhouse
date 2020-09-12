import React from "react";
import { Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import _ from "lodash";

import { PanelEdit } from "../../../common/panelEdit";
import { SectionHeader } from "../../../common/sectionHeader";

import { ExprienceYearsCounter } from "./components/exprienceYearsCounter";
import { CompanyExprienceSummary } from "./components/companyExprienceSummary";
import { EducationSummary } from "./components/educationSummary";
import { IExperience, IEducation } from "../modes";
import { BaseEditComponent, mapDispatchToProps, mapStateToProps } from "./baseEditComponent";

class ProfileExperienceEditComponent extends BaseEditComponent {

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

    onAddNewEducation = (event: any) => {
        event.preventDefault();
        const newEducation: IEducation = {
            degree: '',
            endYear: '',
            institute: '',
            isCurrentlyStudy: false,
            startYear: '',
        };
        this.changeState({ educations: [...this.state.educations, newEducation] });
    }

    onEducationRemove = (index: number) => {
        const educations = [...this.state.educations];
        educations.splice(index, 1);
        this.changeState({ educations: educations });
    }

    onEducationUpdate = (index: number, education: IEducation) => {
        const educations = [...this.state.educations];
        educations[index] = education;
        this.changeState({ educations: educations });
    }

    render() {
        return (
            <PanelEdit title="Experience" className="mt-1 pr-0" isBusy={this.props.resumeStateModel.isBusy} onUpdateClick={() => { this.props.updateProfile(this.state) }}>
                <Row>
                    <Col md="10">
                        <ExprienceYearsCounter experience={this.state.totalYearOfExperience} onExperienceChange={(experience) => { this.changeState({ totalYearOfExperience: +experience }) }} />
                        <div className="mt-2 mb-3">
                            <SectionHeader title="Professional experience"></SectionHeader>
                        </div>
                        {
                            this.state.experiences.map((experience, i) => {
                                return <div key={i}>
                                    <CompanyExprienceSummary index={i} experience={experience}
                                        onExperienceRemove={this.onExperienceRemove}
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
                        {
                            this.state.educations.map((education, i) => {
                                return <div key={i}>
                                    <EducationSummary index={i} education={education}
                                        onEducationRemove={this.onEducationRemove}
                                        onEducationUpdated={this.onEducationUpdate} />
                                </div>

                            })
                        }
                        <div className="mt-1">
                            <a href="#" onClick={this.onAddNewEducation} className="font-size-small"><FontAwesomeIcon icon={faPlusCircle} /> Add Education </a>
                        </div>
                    </Col>
                </Row>
            </PanelEdit>

        )
    }
}

export const ProfileExperienceEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileExperienceEditComponent);