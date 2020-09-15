import React, { Component } from "react";
import _ from "lodash";
import { Row, Col, Spinner } from 'react-bootstrap';
import { ProfileHeader } from "./components/profileHeader";
import { ProfileAbout } from "./components/profileAbout";
import { ProfileIdeakRoles } from "./components/profileIdealRoles";
import { ProfileSummary } from "./components/profileSummary";
import { ProfileSkills } from "./components/profileSkills";
import { ProfileExperience } from "./components/profleExperience";
import { ProfileEducation } from "./components/profileEducation";
import { IProfileStateModel } from "../modes";
import { defaultProfileState, getProfile, changeBusyState } from "../profileStore";
import { IReducerState } from "../../../helpers";
import { connect } from "react-redux";
class ProfileComponent extends Component<IProps, IProfileStateModel> {
    constructor(props: IProps) {
        super(props);
        this.state = props.profile ? props.profile : defaultProfileState;
    }

    async componentWillMount() {
        this.props.changeBusyState(true);
        await this.props.getProfile(this.props.profile.lastPullTime);
        this.props.changeBusyState(false);
    }

    componentWillReceiveProps(nextProps: IProps) {
        const isEqual = _.isEqual(nextProps.profile, this.state);
        if (!isEqual) {
            this.setState({
                ...nextProps.profile
            });
        }
    }

    render() {
        return (
            <>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        {this.state.isBusy ? <Spinner animation="grow" size="sm" className="mr-2"></Spinner> : null}
                    </Col>
                </Row>
                <ProfileHeader profile={this.props.profile}></ProfileHeader>
                <Row className="text-left mt-2">
                    <Col md="4">
                        <ProfileAbout profile={this.props.profile}></ProfileAbout>
                    </Col>
                    <Col className="pl-0">
                        <ProfileIdeakRoles profile={this.props.profile}></ProfileIdeakRoles>
                        <ProfileSummary profile={this.props.profile}></ProfileSummary>
                        <ProfileSkills profile={this.props.profile}></ProfileSkills>
                        <ProfileExperience profile={this.props.profile}></ProfileExperience>
                        <ProfileEducation profile={this.props.profile}></ProfileEducation>
                    </Col>
                </Row>
                <div className="mb-5"></div>
            </>
        )
    }
}

interface IProps {
    profile: IProfileStateModel;
    changeBusyState(state: boolean): void;
    getProfile(lastPullTime: number): Promise<void>;
}

export const mapStateToProps = (state: IReducerState) => {
    return {
        profile: { ...state.profileResucer },
    };
}

export const mapDispatchToProps = (dispatch: any) => {
    return {
        getProfile: (lastUpdate: number) => dispatch(getProfile(lastUpdate)),
        changeBusyState: (state: boolean) => dispatch(changeBusyState(state))
    }
}

export const Profile = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileComponent);