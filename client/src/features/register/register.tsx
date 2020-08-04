import React, { Component } from "react";
import { Tabs, Tab } from 'react-bootstrap';
import { TalentRegister } from "./components/TalentRegister/TalentRegister";
import { CompanyRegister } from "./components/CompanyRegister";

export class Register extends Component {
    render() {
        return (
            <div>
                <h2>What type of user are you ?</h2>
                <Tabs>
                    <Tab eventKey="talent" title="Talent">
                        <TalentRegister></TalentRegister>
                    </Tab>
                    <Tab eventKey="company" title="Company">
                        <CompanyRegister></CompanyRegister>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}