import React, { Component } from "react";
import { Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export class SkillSelector extends Component {
    state = {
        skills: [".NET", "C#", "ASP.NET Core", "TypeScript", ".NET", "C#", "ASP.NET Core", "TypeScript"]
    }
    render() {
        return (
            <>
                <InputGroup className="mb-2 mr-sm-2">
                    <FormControl id="inlineFormInputGroupUsername2" placeholder="Add tech stack" />
                    <InputGroup.Prepend>
                        <Button>Add</Button>
                    </InputGroup.Prepend>
                </InputGroup>
                <div className="tag-inline">
                    {this.state.skills.map((skill, i) => {
                        return (
                            <span key={i} className="border rounded p-2 bg-light m-1 font-size-small">
                                {skill}
                                <FontAwesomeIcon className="ml-2 text-muted" icon={faTimes} />
                            </span>
                        )
                    })}
                </div>
            </>
        )
    }
}