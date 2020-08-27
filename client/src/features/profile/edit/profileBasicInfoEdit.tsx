import React, { Component } from "react";
import { Form, Row, Col, Button, Spinner } from 'react-bootstrap';
import { connect } from "react-redux";
import _ from "lodash";

import { PanelEdit } from "../../../common/panelEdit";
import { SectionHeader } from "../../../common/sectionHeader";

import { ProfilePicture } from "./components/profilePicture";
import { SocialMediaComponent } from "./components/socialMediaComponent";

import { IProfileStateModel, IProfileProps, IProfile } from "../modes";
import { defaultProfileState, getProfile, changeBusyState, updateProfile } from "../profileStore";

import { getvalues } from "../defaultValues/valueStore";
import { IReducerState } from "../../../helpers";


export class ProfileBasicInfoEditComponent extends Component<IProfileProps, IProfileStateModel> {

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

    handleInputChange = (event: any) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    };

    handleSocialMediaChange = (name: string, value: string) => {
        let socialLinks = this.state.socialLinks ? this.state.socialLinks : [];

        const index = _.findIndex(socialLinks, (sl) => { return sl.name === name });
        if (index > -1) {
            socialLinks = Object.assign([...socialLinks], {
                [index]: {
                    ...socialLinks[index],
                    link: value
                }
            });
        } else {
            socialLinks = [...socialLinks, { link: value, name: name }]
        }

        this.setState({
            ...this.state,
            socialLinks: socialLinks
        })
    }

    render() {
        return (
            <PanelEdit title="Basic Info" className="mt-1 pr-0" isBusy={this.props.resumeStateModel.isBusy} onUpdateClick={() => { this.props.updateProfile(this.state) }}>
                <ProfilePicture></ProfilePicture>
                <hr />
                <Row>
                    <Col>
                        <Form.Group controlId="firstName">
                            <Form.Label className="font-weight-semi-bold">First name *</Form.Label>
                            <Form.Control name="firstName" type="text" placeholder="Jon" value={this.state.firstName} onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group controlId="location">
                            <Form.Label className="font-weight-semi-bold">Location *</Form.Label>
                            <Form.Control name="location" type="text" placeholder="Jafrabad, Shonkor" value={this.state.location} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>

                        <Form.Group controlId="lastName">
                            <Form.Label className="font-weight-semi-bold">Last name *</Form.Label>
                            <Form.Control type="text" name="lastName" placeholder="Dho" value={this.state.lastName} onChange={this.handleInputChange} />
                        </Form.Group>

                        <Form.Group controlId="phone">
                            <Form.Label className="font-weight-semi-bold">Phone *</Form.Label>
                            <Form.Control type="phone" name="phone" placeholder="+8801xxx-xxxxxx" value={this.state.phone} onChange={this.handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <hr />
                <SectionHeader title="Your social links" />
                <Row className="mt-4">
                    {this.props.valuesModel.socialMedia.map((media, i) => {
                        const userValue = _.find(this.state.socialLinks, (s) => { return s.name === media.name });
                        return (
                            <Col key={i} md="6">
                                <SocialMediaComponent placeholder={media.placeholder} value={userValue?.link ?? ''} name={media.name} onChange={this.handleSocialMediaChange} />
                            </Col>
                        )
                    })}
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

export const ProfileBasicInfoEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileBasicInfoEditComponent);