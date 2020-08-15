import React, { Component } from "react";
import { Image, Row, Col, Button, Form } from 'react-bootstrap';
import { PanelEdit } from "../../common/panelEdit"
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandRock } from '@fortawesome/free-solid-svg-icons'

import 'draft-js/dist/Draft.css';

const DragHandle = SortableHandle(() => <FontAwesomeIcon className="mr-3 text-muted" icon={faHandRock} />);

const SortableItem = SortableElement(({ value }: any) => {
    return (
        <li className="list-style-none">
            <Row>
                <Col className="pt-1">
                    <DragHandle />
                    <strong className="text-dark"> #{value.index + 1}</strong>
                    <span className="text-muted ml-3">{value.value.skill}</span>
                </Col>
                <Col>
                    <Form.Control as="select">
                        <option value="0..1">&lt; 1 year</option>
                        <option value="1..2">1-2 years</option>
                        <option value="2..4">2-4 years</option>
                        <option value="4..6">4-6 years</option>
                        <option value="6..8">6-8 years</option>
                        <option value="8+">+8 years</option>
                    </Form.Control>
                </Col>
            </Row>
        </li>
    )
});

const SortableList = SortableContainer(({ items }: any) => {
    return (
        <ul className="list-unstyled">
            {items.map((value: any, index: any) => (
                <SortableItem key={`item-${index}`} index={index} value={{ value, index }} />
            ))}
        </ul>
    );
});


export class ProfileIdealRolesEdit extends Component<any, any> {
    state = {
        skills: [
            "Frontend Engineer", "Fullstack Engineer", "Embedded Engineer", "Android Engineer", "Go Engineer", "Java Engineer", ".NET Engineer", "Python Engineer", "Scala Engineer",
            "Backend Engineer", "Mobile Engineer", "Engineering Manager", "C/C++ Engineer", "iOS Engineer", "Javascript Backend Engineer", "PHP Engineer", "Ruby Engineer", "Ruby Engineer", "DevOps Engineer"
        ],
        selectedSkils: [
            { skill: "Frontend Engineer", Exprience: "1-7" },
            { skill: "Fullstack Engineer", Exprience: "1-7" },
            { skill: "Android Engineer", Exprience: "1-7" },
            { skill: "Go Engineer", Exprience: "1-7" },
            { skill: "Go Engineer", Exprience: "1-7" }
        ]
    }

    render() {
        return (
            <PanelEdit title="Ideal Roles">
                <strong className="text-dark font-size-small">What would be your ideal next role? (pick up to 5) *</strong>
                <div className="mt-3">
                    <strong className="text-muted font-size-small">Software Engineering</strong>
                </div>
                <Row>
                    {this.state.skills.map((skill, i) => {
                        return (
                            <Col md="6" className="mt-3" key={i}>
                                <Form.Check custom inline label={skill} type="checkbox" id={i + 'id'} />
                            </Col>
                        )
                    })}
                </Row>

                <div className="mt-4">
                    <strong className="text-dark font-size-small">Please select the years of experience per role, and rank them in order of importance to you *</strong>
                </div>
                <Row className="mt-2">
                    <Col md="9">
                        <div className="top-skill">
                            <SortableList items={this.state.selectedSkils} />
                        </div>
                    </Col>
                </Row>
            </PanelEdit>
        )
    }
}