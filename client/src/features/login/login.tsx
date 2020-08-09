import React, { Component } from "react";
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import { ILoginStateModel, ILoginPorps } from "./models"
import { IReducerState, Routes } from "../../helpers"
import { login, defaultLoginState } from "./store";
import { connect } from "react-redux";
import { push } from "connected-react-router";
export class LoginComponent extends Component<ILoginPorps, ILoginStateModel> {

    state = defaultLoginState;

    handleInputChange = (event: any) => {
        const model = {
            ...this.state,
            [event.target.name]: event.target.value
        };

        const isValid = this.validateModel(model);
        this.setState({
            ...model,
            isFormValid: isValid
        })
    };

    /* #region  Private Methods */

    private validateModel(model: ILoginStateModel): boolean {
        const isValid = !!(model.username &&
            model.password);
        return isValid;
    }

    /* #endregion */


    render() {
        return (
            <div>
                <h2>Log in</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="username" value={this.state.username}
                            onChange={this.handleInputChange} placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password}
                            onChange={this.handleInputChange} placeholder="Enter password" />
                    </Form.Group>
                    <Row>
                        <Col md={3}>
                            <Button disabled={this.props.isBusy || !this.state.isFormValid} variant="primary" type="button"
                                onClick={() => this.props.loginRequestAction(this.state)}>
                                {this.props.isBusy ? <Spinner animation="grow" size="sm" className="mr-2"></Spinner> : null}
                                Login
                            </Button>
                        </Col>
                        <Col md={9} className="text-right">
                            Not a member yet? <a href="javascript:void(0)" onClick={() => { this.props.redirectToRegister() }}>Sign up</a>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}


const mapStateToProps = (state: IReducerState) => {
    return {
        ...state.loginStore
    };
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        loginRequestAction: (loginStateModel: ILoginStateModel) => {
            dispatch(login(loginStateModel))
        },

        redirectToRegister: () => {
            dispatch(push(Routes.register))
        }
    }
}

export const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);

