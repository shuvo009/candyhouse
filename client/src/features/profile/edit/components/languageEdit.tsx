import React from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { BaseComponent } from "../../../../helpers";
import { SectionHeader } from "../../../../common/sectionHeader"
import { ILanguage } from "../../modes";

export class LanguageEdit extends BaseComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            userLanguage: props.userLanguage,
            selectedLanguage: '',
            selectedFluency: ''
        }
    }

    onLanguageAddClick = () => {
        if (!this.state.selectedFluency || !this.state.selectedLanguage) {
            return;
        }

        const languages: ILanguage = {
            level: this.state.selectedFluency,
            name: this.state.selectedLanguage
        };
        const userLanguage = [...this.state.userLanguage, languages];

        this.setState({
            userLanguage: userLanguage,
            selectedLanguage: '',
            selectedFluency: ''
        })
        this.props.onLanguageChanged(userLanguage);
    }

    onLanguageRemoveClick = (index: number) => {
        const userLanguage = [...this.state.userLanguage];
        userLanguage.splice(index, 1);
        this.setState({
            userLanguage: userLanguage,
        });
        this.props.onLanguageChanged(userLanguage);
    }

    render() {
        return (
            <>
                <SectionHeader title="Languages *" />
                <p className="font-size-small mt-2 mb-2">Which languages can you use to communicate with humans?</p>
                <Row>
                    <Col className="p-0 pr-1 pl-3">

                        <Form.Control as="select" className="float-left" name="selectedLanguage" value={this.state.selectedLanguage} onChange={this.handleInputChange}>
                            <option disabled value="">Select</option>
                            {this.props.languages.map((lan, i) => {
                                return (
                                    <option key={i} value={lan}>{lan}</option>
                                )
                            })}
                        </Form.Control>
                    </Col>
                    <Col md="3" className="p-0 pr-1">
                        <Form.Control as="select" className="float-left" name="selectedFluency" value={this.state.selectedFluency} onChange={this.handleInputChange}>
                            <option disabled value="">Select</option>
                            {this.props.languageFluency.map((lan, i) => {
                                return (
                                    <option key={i} value={lan}>{lan}</option>
                                )
                            })}
                        </Form.Control>
                    </Col>
                    <Col className="p-0">
                        <Button onClick={this.onLanguageAddClick}>Add</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="tag-inline">
                            {this.state.userLanguage.map((lan, i) => {
                                return (
                                    <span key={i} className="border rounded p-2 bg-light mt-1 mr-1 font-size-small">
                                        <span className="font-weight-bold">{lan.name}</span><span className="font-weight-bold">({lan.level})</span>
                                        <FontAwesomeIcon onClick={() => { this.onLanguageRemoveClick(i) }} className="ml-2 text-muted cursor-pointer" icon={faTimes} />
                                    </span>
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </>
        )

    }
}

interface IProps {
    languages: string[];
    languageFluency: string[];
    userLanguage: ILanguage[];
    onLanguageChanged(languages: ILanguage[]): void;
}
interface IState {
    userLanguage: ILanguage[];
    selectedLanguage: string;
    selectedFluency: string;

}
