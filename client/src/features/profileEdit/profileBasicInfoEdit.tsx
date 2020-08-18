import React, { Component } from "react";
import { Form, InputGroup, FormControl, Row, Col, Button } from 'react-bootstrap';
import { PanelEdit } from "../../common/panelEdit"
import { SectionHeader } from "../../common/sectionHeader"
import { ProfilePicture } from "./components/profilePicture"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { IResumeStateModel, IResumeProps } from "./modes"
import { ISocialMedia } from "./values/models"
import { defaultLoginState, getProfile } from "./store"
import { getvalues } from "./values/store"
import { IReducerState } from "../../helpers";
import { connect } from "react-redux";
import _ from "lodash";

export class ProfileBasicInfoEditComponent extends Component<IResumeProps, IResumeStateModel> {
    constructor(props: IResumeProps) {
        super(props);
        this.state = props.resumeStateModel ? props.resumeStateModel : defaultLoginState;
    }

    async componentWillMount() {
        await this.props.getProfile(this.props.resumeStateModel.lastPullTime)
        await this.props.getValues(this.props.valuesModel.lastPullTime)
    }
    componentDidUpdate() {
        console.log("zzz");
    }

    componentWillReceiveProps(nextProps: IResumeProps) {
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
        const social = _.find(this.state.socialLinks, (sl) => { return sl.name === name });
        if (social) {
            social.link = value;
        } else {
            this.state.socialLinks.push({ link: value, name: name });
        }
    }

    render() {
        return (
            <PanelEdit title="Basic Info" className="mt-1 pr-0">
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
                        const userValue = _.find(this.props.resumeStateModel.socialLinks, (s) => { return s.name === media.name });
                        return (
                            <Col key={i} md="6">
                                <SocialMediaComponent placeholder={media.placeholder} value={userValue?.link ?? ''} name={media.name} onChange={this.handleSocialMediaChange} />
                            </Col>
                        )
                    })}
                </Row>
                <Button className="pl-4 pr-4 mt-4">Save</Button>
            </PanelEdit>
        )
    }
}

const mapStateToProps = (state: IReducerState) => {
    console.log(state.profileStore);

    return {
        resumeStateModel: { ...state.profileStore },
        valuesModel: { ...state.valuesStore }
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProfile: (lastUpdate: number) => dispatch(getProfile(lastUpdate)),
        getValues: (lastUpdate: number) => dispatch(getvalues(lastUpdate)),
    }
}

export const ProfileBasicInfoEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileBasicInfoEditComponent);

class SocialMediaComponent extends Component<ISocialMediaComponentProps, string> {
    constructor(props: ISocialMediaComponentProps) {
        super(props);
        this.state = props.value;
    }


    handleInputChange = (event: any) => {
        this.setState(event.target.value);
        this.props.onChange(this.props.name, event.target.value);
    };

    getIcon = (name: string) => {
        switch (name) {
            case 'Github':
                return faGithub;
            case 'LinkedIn':
                return faLinkedinIn;
            case 'StackOverflow':
                return faStackOverflow;
            default:
                return faGlobe;
        }
    }

    render() {
        return (
            <Form.Group>
                <Form.Label className="font-weight-semi-bold">{this.props.name}</Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text><FontAwesomeIcon icon={this.getIcon(this.props.name)}></FontAwesomeIcon></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder={this.props.placeholder} value={this.state} onChange={this.handleInputChange} />
                </InputGroup>
            </Form.Group>
        )
    }
}

interface ISocialMediaComponentProps extends ISocialMedia {
    value: string;
    onChange(name: string, value: string): void;
}
