import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import { talentRegister, talentRegisterState } from "./store";
import { IReducerState } from "../../../../helpers/store"
import { connect } from "react-redux";
import { ITalentRegisterProps, ITalentRegisterState } from "./models";
import { Redirect } from "react-router-dom";


class TalentRegisterComponent extends Component<ITalentRegisterProps, ITalentRegisterState> {
    state = talentRegisterState

    handleInputChange = (event: any) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value.trim()
        });
    };
    render() {
        if (this.state.isRegistrationSuccess) {
            <Redirect to="/login"></Redirect>
        }
        return (
            <div className="p-3">
                <Form>
                    <Form.Group>
                        <Form.Label>FirstName</Form.Label>
                        <Form.Control name="firstName" value={this.state.firstName}
                            onChange={this.handleInputChange} type="text" placeholder="Enter FirstName" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>LastName</Form.Label>
                        <Form.Control type="text" name="lastName" value={this.state.lastName}
                            onChange={this.handleInputChange} placeholder="Enter LastName" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" value={this.state.email}
                            onChange={this.handleInputChange} type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password}
                            onChange={this.handleInputChange} placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="confirmpassword" value={this.state.confirmpassword}
                            onChange={this.handleInputChange} placeholder="Enter confirm password" />
                    </Form.Group>
                    <Button role="alert" variant="primary" type="button" onClick={() => this.props.talentRegistrationRequestAction(this.state)}>
                        Register
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state: IReducerState): ITalentRegisterState => state.talentRegisterStore
const mapDispatchToProps = (dispatch: any): ITalentRegisterProps => {
    return {
        talentRegistrationRequestAction: (talentRegisterState: ITalentRegisterState) => {
            dispatch(talentRegister(talentRegisterState))
        }
    }
}

export const TalentRegister = connect(
    mapStateToProps,
    mapDispatchToProps
)(TalentRegisterComponent);

