import React, { Component } from "react";
import _ from "lodash";
import parse from "html-react-parser";
import { Panel } from "../../../../common/panel"
import { IProfileStateModel } from "../../modes";
export class ProfileSummary extends Component<IProps> {

    getTitle = (type: string) => {
        switch (type) {
            case "I_AM":
                return "I am...";
            case "MY_STRONGEST_SKILLS":
                return "My strongest skills and how I learned them...";
            case "WHAT_I_AM_LOOKING":
                return "What I am looking for...";
            case "ONE_FACT":
                return "What I am looking for...";
            case "ADDITIONAL_INFORMATION":
                return "Additional information";
        }

    }

    render() {
        return (
            <>
                <Panel title="Summary" className="mt-2">
                    {this.props.profile.summaryList.map((item, i) => {
                        return (
                            <div className="mt-3" key={i}>
                                <h4 className="text-dark m-0 profile-header-text font-weight-bold">
                                    {this.getTitle(item.type)}
                                </h4>
                                <h3 className="text-body profile-header-text font-weight-normal">
                                    {parse(item.description)}
                                </h3>
                            </div>
                        )
                    })}
                </Panel>
            </>
        )
    }
}

interface IProps {
    profile: IProfileStateModel;
}