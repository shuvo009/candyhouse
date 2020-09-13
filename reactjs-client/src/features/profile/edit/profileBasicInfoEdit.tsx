import React from "react";
import { Form, Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import _ from "lodash";

import { PanelEdit } from "../../../common/panelEdit";
import { SectionHeader } from "../../../common/sectionHeader";
import { ProfilePicture } from "./components/profilePicture";
import { SocialMediaComponent } from "./components/socialMediaComponent";
import { BaseEditComponent, mapDispatchToProps, mapStateToProps } from "./baseEditComponent";

export class ProfileBasicInfoEditComponent extends BaseEditComponent {

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
                            <Form.Control name="address" type="text" placeholder="Jafrabad, Shonkor" value={this.state.address} onChange={this.handleInputChange} />
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
                <Row>
                    <Col>
                        <Form.Group controlId="phone">
                            <Form.Label className="font-weight-semi-bold">Pitch</Form.Label>
                            <textarea className="form-control" name="pitch" value={this.state.pitch} onChange={this.handleInputChange}></textarea>
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

export const ProfileBasicInfoEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileBasicInfoEditComponent);