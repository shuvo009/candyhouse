import React, { Component } from "react";
import { Panel } from "../../../../common/panel"
import { IProfileStateModel } from "../../modes";
export class ProfileSkills extends Component<IProps> {

    render() {
        return (
            <>
                <Panel title="Skills" className="mt-2">
                    <div className="clearfix">
                        {this.props.profile.skills.map((item, i) => {
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

interface IProps {
    profile: IProfileStateModel;
}