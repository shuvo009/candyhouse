import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import { talentRegister } from "./store";
import { IReducerState } from "../../../../helpers/store"
import { connect } from "react-redux";
import { ITalentRegisterProps, ITalentRegisterState } from "./models";


class TalentRegisterComponent extends Component<ITalentRegisterProps, ITalentRegisterState> {

    render() {
        return (
            <div className="p-3">
                <Form>
                    <Form.Group>
                        <Form.Label>FirstName</Form.Label>
                        <Form.Control type="text" placeholder="Enter FirstName" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>LastName</Form.Label>
                        <Form.Control type="text" placeholder="Enter LastName" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter confirm password" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={() => this.props.talentRegistrationRequestAction(this.state)}>
                        Register
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state: IReducerState): ITalentRegisterState => state.talentRegisterStore
const mapDispatchToProps = (): ITalentRegisterProps => {
    return {
        talentRegistrationRequestAction: talentRegister
    }
}

export const TalentRegister = connect(
    mapStateToProps,
    mapDispatchToProps
)(TalentRegisterComponent);

