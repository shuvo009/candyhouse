import "react-datepicker/dist/react-datepicker.css";
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import _ from "lodash";
import { connect } from "react-redux";

import { InputGroup, Row, Col, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

import { PanelEdit } from "../../../common/panelEdit";
import { SectionHeader } from "../../../common/sectionHeader";
import { IReducerState } from "../../../helpers";

import { IProfileStateModel, IProfileProps, IProfile, INextRole } from "../modes";
import { defaultProfileState, getProfile, changeBusyState, updateProfile } from "../profileStore";

import { getvalues } from "../defaultValues/valueStore";
import { IExprience } from "../defaultValues/models";

export class ProfileEditLocationComponent extends Component<IProfileProps, IProfileStateModel>  {

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

    onNoticePeriodTypeChange = (event: any) => {
        this.setState({
            ...this.state,
            noticePeriodType: event.target.value,
            noticePeriod: ''
        })
    };

    onNoticePeriodChange = (value: any) => {
        this.setState({
            ...this.state,
            noticePeriod: value
        })
    };

    onEmploymentTypeSelect = (event: any) => {
        let employmentType = this.state.employmentType || [];

        if (event.target.checked) {
            employmentType = [...employmentType, event.target.value];
        } else {
            employmentType = _.filter(employmentType, (s) => { return s != event.target.value })
        }
        this.setState({
            ...this.state,
            employmentType: employmentType
        })
    }

    render() {
        return (
            <PanelEdit title="location" className="mt-1 pr-0" isBusy={this.props.resumeStateModel.isBusy} onUpdateClick={() => { this.props.updateProfile(this.state) }}>
                <Row>
                    <Col md="11">
                        <SectionHeader title="What type of employment are you looking for?*" />
                        <Row className="mt-3 mb-3">
                            {this.props.valuesModel.positions.map((position, i) => {
                                const isSelected = !!_.find(this.state.employmentType, (s) => { return s == position })
                                return (
                                    <Col key={i} md="4" className="mt-3">
                                        <Form.Check inline custom checked={isSelected} label={position} value={position} type="checkbox" id={i + 'id'} onChange={this.onEmploymentTypeSelect} />
                                    </Col>
                                )
                            })}
                        </Row>
                        <SectionHeader title="When could you start a new opportunity? *" />
                        <Row className="mt-3 mb-3">
                            <Col md="6">
                                <Form.Check custom id="now" type="radio" label="Now" value="now" checked={this.state.noticePeriodType === 'now'} onChange={this.onNoticePeriodTypeChange} />
                                <Form.Check className="mt-2" custom id="noticeMon" type="radio" label="Upon completing my notice period" value="days" checked={this.state.noticePeriodType === 'days'} onChange={this.onNoticePeriodTypeChange} />
                                {this.state.noticePeriodType === 'days' ?
                                    <Form.Control as="select" className="mt-2 ml-3" value={this.state.noticePeriod} onChange={(event) => { this.onNoticePeriodChange(event.target.value) }}>
                                        <option value="" disabled={true}>Select notice period</option>
                                        <option value="1">1 month</option>
                                        <option value="2">2 months</option>
                                        <option value="3">3 months</option>
                                        <option value="4">4 months</option>
                                        <option value="5">5 months</option>
                                        <option value="6">6 months</option>
                                        <option value="7">7 months</option>
                                        <option value="8">8 months</option>
                                        <option value="9">9 months</option>
                                        <option value="10">10 months</option>
                                        <option value="11">11 months</option>
                                        <option value="12">12 months</option>
                                    </Form.Control> : null}
                                <Form.Check className="mt-2" custom id="specificDate" type="radio" label="After a specific date" value="specificDate" checked={this.state.noticePeriodType === 'specificDate'} onChange={this.onNoticePeriodTypeChange} />
                                {
                                    this.state.noticePeriodType === 'specificDate' ? <DatePicker className="mt-2 ml-3 form form-control" selected={this.state.noticePeriod} onChange={this.onNoticePeriodChange}></DatePicker> : null
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <SectionHeader title="Where would you like to work?*" />
                                <div className="mt-2">
                                    <Form.Check inline custom label="Dhaka" type="checkbox" id={"Dhaka" + 'id'} />
                                </div>
                            </Col>
                            <Col>
                                <SectionHeader title="What are your minimum salary expectations?*" />
                                <InputGroup className="mt-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl placeholder="min. salary for Dhaka" />
                                </InputGroup>
                            </Col>
                        </Row>
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

export const ProfileEditLocation = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileEditLocationComponent);