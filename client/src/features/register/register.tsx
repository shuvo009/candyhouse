import React, { Component } from "react";
import { Tabs, Tab } from 'react-bootstrap';
import { TalentRegister } from "./components/TalentRegister/TalentRegister";
import { CompanyRegister } from "./components/CompanyRegister";
import { push } from 'connected-react-router';
import { connect } from "react-redux";
import { Routes } from "../../helpers";
class RegisterComponent extends Component<any> {
    render() {
        return (
            <>
                <h2>What type of user are you ?</h2>
                <Tabs>
                    <Tab eventKey="talent" title="Talent">
                        <TalentRegister></TalentRegister>
                    </Tab>
                    <Tab eventKey="company" title="Company">
                        <CompanyRegister></CompanyRegister>
                    </Tab>
                </Tabs>
                <div className="text-right">
                    Already have a CandyHouse account? <a href="" onClick={(e) => { e.preventDefault(); this.props.push(Routes.login) }}>Sign in</a>
                </div>
            </>
        )
    }
}

export const Register = connect(
    null,
    { push }
)(RegisterComponent);