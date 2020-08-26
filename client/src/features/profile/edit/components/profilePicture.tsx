import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Row, Col, Button, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


import { IProfile, IProfileStateModel } from "../../modes"
import { IReducerState } from "../../../../helpers";
import { onPicRemove, onPicSet } from "../../profileStore"

export class ProfilePictureComponent extends Component<IProps, IProfileStateModel> {

    inputElement: any;

    handleChange = (event: any) => {
        this.props.onPicSet(event.target.files[0]);
    }

    onUploacClick = () => {
        this.inputElement.click();
    }

    render() {

        let image = 'https://via.placeholder.com/300/09f/fff.png';
        if (this.props.profile.profileImage) {
            image = process.env.REACT_APP_API_BASE + '/image/' + this.props.profile.profileImage;
        }

        return (
            <Row>
                <Col md="2" className="text-center">
                    <Image roundedCircle width={90} height={90} className="mr-3" src={image} alt="image" />
                    <div>

                    </div>
                   
                </Col>
                <Col>
                    <div className="mt-3">
                        <Button variant="outline-primary" disabled={this.props.profile.isBusy} className="pl-5 pr-5" onClick={this.onUploacClick}>
                            Upload
                        </Button>
                        {this.props.profile.isBusy ? <Spinner animation="grow" variant="success" size="sm" className="ml-2"></Spinner> : null}
                        <input ref={input => this.inputElement = input} type="file" className="invisible" onChange={this.handleChange} />
                    </div>
                    <div className="mt-1 text-muted cursor-pointer" onClick={() => { this.props.onPicRemove(this.props.profile) }}>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> <span className="ml-1">Delete Photo</span>
                    </div>

                </Col>
            </Row>
        )
    }
}


const mapStateToProps = (state: IReducerState) => {
    return {
        profile: { ...state.profileResucer }
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onPicRemove: (profile: IProfile) => dispatch(onPicRemove(profile)),
        onPicSet: (file: any) => dispatch(onPicSet(file))
    }
}

export const ProfilePicture = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePictureComponent);

interface IProps {
    profile: IProfileStateModel;
    onPicRemove(profile: IProfile): void;
    onPicSet(file: any): void;
}