import React, { Component } from "react";
import _ from "lodash";
import { Row, Col } from 'react-bootstrap';
import { ProfileHeader } from "./components/profileHeader";
import { ProfileAbout } from "./components/profileAbout";
import { ProfileIdeakRoles } from "./components/profileIdealRoles";
import { ProfileSummary } from "./components/profileSummary";
import { ProfileSkils } from "./components/profileSkils";
import { ProfileExperience } from "./components/profleExperience";
import { ProfileEducation } from "./components/profileEducation";
import { ProfileGithub } from "./components/profileGithub";
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
                <ProfileHeader profile={this.props.profile}></ProfileHeader>
                <Row className="text-left mt-2">
                    <Col md="4">
                        <ProfileAbout profile={this.props.profile}></ProfileAbout>
                        <ProfileGithub></ProfileGithub>
                    </Col>
                    <Col className="pl-0">
                        <ProfileIdeakRoles profile={this.props.profile}></ProfileIdeakRoles>
                        <ProfileSummary></ProfileSummary>
                        <ProfileSkils></ProfileSkils>
                        <ProfileExperience></ProfileExperience>
                        <ProfileEducation></ProfileEducation>
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