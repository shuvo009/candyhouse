import React, { Component } from "react";
import Rating from "react-rating"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Panel } from "../../../../common/panel"
export class ProfileSkils extends Component<any, IProfileSkillsState> {

    state = {
        Skills: ['.NET', 'Amazon web service (AWS)', 'Angular', 'ASP.NET Core',
            'ASP.NET Web Api', 'C#', 'Entity Framework', 'Git', 'JavaScript',
            'MongoDB', 'Node.js', 'React', 'SQL Server', 'Typescript']
    }

    render() {
        return (
            <>
                <Panel title="Skills" className="mt-2">
                    <div className="clearfix">
                        {this.state.Skills.map((item, i) => {
                            return (
                                <span key={i} className="skill-item">{item}</span>
                            )
                        })}
                    </div>
                </Panel>

            </>
        )
    }
}

interface IProfileSkillsState {
    Skills: string[];
}