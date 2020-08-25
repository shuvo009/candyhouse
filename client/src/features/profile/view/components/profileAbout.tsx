import React, { Component } from "react";
import { Panel } from "../../../../common/panel"
export class ProfileAbout extends Component<any, IProfileAboutState> {

    status = {
        profileItems: [
            { title: "Professional experience", value: "> 8 years" },
            { title: "Contract", value: "Full-time" },
            { title: "Earliest start date", value: "After 1 month notice period" },
            { title: "Wants to work in (salary)", value: "60,000" },
            { title: "Languages", value: "English (Conversational)" },
        ]
    }

    render() {
        return (
            <>
                <Panel title="About">
                    {this.status.profileItems.map((item, i) => {
                        return (
                            <div className="mt-3" key={i}>
                                <h3 className="text-muted m-0 profile-header-text font-weight-normal">
                                    {item.title}
                                </h3>
                                <h4 className="text-dark profile-header-text">
                                    {item.value}
                                </h4>
                            </div>
                        )
                    })}
                </Panel>
            </>
        )
    }
}


interface IProfileAboutState {
    profileItems: IProfileItem[]
}

interface IProfileItem {
    title: string;
    value: string;
}