import React from "react";
import { Button, InputGroup, FormControl } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { BaseComponent } from "../../../../helpers/baseComponent"

export class SkillSelector extends BaseComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            skills: props.skills,
            skillText: ''
        }
    }

    onHandleInputChanged() {
        this.props.onChangeSkills(this.state.skills);
    }

    onAddSkill = () => {
        if (!this.state.skillText) {
            return;
        }

        this.setState({
            ...this.state,
            skillText: '',
            skills: [...this.state.skills, this.state.skillText]
        });
        this.props.onChangeSkills(this.state.skills);
    };

    onRemoveSkill = (index: number) => {
        const skills = [...this.state.skills]
        skills.splice(index, 1);
        this.changeState({ skills: skills })
    };

    render() {
        return (
            <>
                <InputGroup className="mb-2 mr-sm-2">
                    <FormControl id="skillText" name="skillText" placeholder="Add tech stack" onChange={this.handleInputChange} value={this.state.skillText} />
                    <InputGroup.Prepend>
                        <Button onClick={this.onAddSkill}>Add</Button>
                    </InputGroup.Prepend>
                </InputGroup>
                <div className="tag-inline">
                    {this.state.skills.map((skill, i) => {
                        return (
                            <span key={i} className="border rounded p-2 bg-light m-1 font-size-small">
                                {skill}
                                <FontAwesomeIcon className="ml-2 text-muted cursor-pointer" icon={faTimes} onClick={() => { this.onRemoveSkill(i) }} />
                            </span>
                        )
                    })}
                </div>
            </>
        )
    }
}

interface IProps {
    skills: string[];
    onChangeSkills(skils: string[]): void;
}

interface IState {
    skills: string[];
    skillText: string;
}