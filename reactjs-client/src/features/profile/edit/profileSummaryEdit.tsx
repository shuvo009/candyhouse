import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { PanelEdit } from "../../../common/panelEdit"
import { ProfileSummaryItem } from "./components/profileSummaryItem";
import { BaseEditComponent, mapDispatchToProps, mapStateToProps } from "./baseEditComponent";

export class ProfileSummaryEditComponent extends BaseEditComponent {

    handleSummaryChange = (type: string, value: string) => {
        let summaryList = this.state.summaryList ? this.state.summaryList : [];

        const index = _.findIndex(summaryList, (sl) => { return sl.type === type });
        if (index > -1) {
            summaryList = Object.assign([...summaryList], {
                [index]: {
                    ...summaryList[index],
                    description: value
                }
            });
        } else {
            summaryList = [...summaryList, { description: value, type: type }]
        }

        this.setState({
            ...this.state,
            summaryList: summaryList
        })
    }

    render() {
        return (
            <PanelEdit title="Summary" className="mt-1 pr-0" isBusy={this.props.resumeStateModel.isBusy} onUpdateClick={() => { this.props.updateProfile(this.state) }}>
                {this.props.valuesModel.summaryList.map((summaryValue, i) => {
                    const summary = _.find(this.state.summaryList, (s) => { return s.type === summaryValue.name });

                    return (
                        <ProfileSummaryItem key={i} title={summaryValue.title} description={summaryValue.description}
                            type={summaryValue.name} value={summary?.description ?? ''} onChange={this.handleSummaryChange} />
                    )
                })}
            </PanelEdit>
        )
    }
}

export const ProfileSummaryEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileSummaryEditComponent);

