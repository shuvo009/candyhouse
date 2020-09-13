import React, { Component } from "react";
import { Card, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { IProfileStateModel } from "../../modes";

export class ProfileHeader extends Component<IProps> {

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
        let image = 'https://via.placeholder.com/300/09f/fff.png';
        if (this.props.profile.profileImage) {
            image = process.env.REACT_APP_API_BASE + '/image/' + this.props.profile.profileImage;
        }

        return (
            <>
                <Card className="text-left">
                    <Card.Body>
                        <Row>
                            <Col md="2">
                                <Image roundedCircle width={128} height={128} className="mr-3" src={image} alt="name" />
                            </Col>
                            <Col md="6">
                                <h5>{this.props.profile.firstName} {this.props.profile.lastName}</h5>
                                <p className="text-muted m-0 profile-header-text">
                                    {this.props.profile.pitch}
                                </p>
                                <p className="text-dark m-0 mt-1">
                                    {this.props.profile.address}
                                </p>
                                <div className="mt-2 profile-header-media">

                                    {this.props.profile.socialLinks.map((media, i) => {
                                        return (
                                            <a key={i} href={media.link}>
                                                <FontAwesomeIcon icon={this.getIcon(media.name)} className="float-left mr-3"></FontAwesomeIcon>
                                            </a>
                                        )
                                    })}
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

interface IProps {
    profile: IProfileStateModel;
}