import React, { Component } from "react";
import _ from "lodash";

import { Panel } from "../../../../common/panel";
import { IProfileStateModel } from "../../modes";

export class ProfileAbout extends Component<IProps> {

    render() {

        const languages = _.map(this.props.profile.languages, (l) => { return `${l.name} (${l.level})` });

        var profileItems = [
            { title: "Professional experience", value: `> ${this.props.profile.totalYearOfExperience} years` },
            { title: "Contract", value: this.props.profile.employmentType.join(', ') },
            { title: "Earliest start date", value: `After ${this.props.profile.noticePeriod} ${this.props.profile.noticePeriodType} notice period` },
            { title: "Wants to work in (salary)", value: this.props.profile.address },
            { title: "Languages", value: languages.join(', ') }
        ]

        return (
            <>
                <Panel title="About">
                    {profileItems.map((item, i) => {
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

interface IProps {
    profile: IProfileStateModel;
}