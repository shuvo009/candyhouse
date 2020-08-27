import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { PanelEdit } from "../../../common/panelEdit"
import { ProfileSummaryItem } from "./components/profileSummaryItem";
import { IProfileStateModel, IProfileProps, IProfile } from "../modes";
import { defaultProfileState, getProfile, changeBusyState, updateProfile } from "../profileStore";

import { getvalues } from "../defaultValues/valueStore";
import { IReducerState } from "../../../helpers";

export class ProfileSummaryEditComponent extends Component<IProfileProps, IProfileStateModel> {

    constructor(props: IProfileProps) {
        super(props);
        this.state = props.resumeStateModel ? props.resumeStateModel : defaultProfileState;
    }


    async componentWillMount() {
        this.props.changeBusyState(true);

        await Promise.all([
            this.props.getProfile(this.props.resumeStateModel.lastPullTime),
            this.props.getValues(this.props.valuesModel.lastPullTime)
        ]);

        this.props.changeBusyState(false);
    }

    componentWillReceiveProps(nextProps: IProfileProps) {
        const isEqual = _.isEqual(nextProps.resumeStateModel, this.state);
        if (!isEqual) {
            this.setState({
                ...nextProps.resumeStateModel
            });
        }
    }


    render() {
        return (
            <PanelEdit title="Summary" className="mt-1 pr-0" isBusy={this.props.resumeStateModel.isBusy} onUpdateClick={() => { this.props.updateProfile(this.state) }}>
                {this.props.valuesModel.summaryList.map((summary, i) => {
                    return (
                        <ProfileSummaryItem key={i} title={summary.title} description={summary.description} value="" onChange={(a) => { console.log(a) }}></ProfileSummaryItem>
                    )
                })}
            </PanelEdit>
        )
    }
}


const mapStateToProps = (state: IReducerState) => {
    return {
        resumeStateModel: { ...state.profileResucer },
        valuesModel: { ...state.valueReducer }
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProfile: (lastUpdate: number) => dispatch(getProfile(lastUpdate)),
        getValues: (lastUpdate: number) => dispatch(getvalues(lastUpdate)),
        changeBusyState: (state: boolean) => dispatch(changeBusyState(state)),
        updateProfile: (resume: IProfile) => dispatch(updateProfile(resume)),
    }
}

export const ProfileSummaryEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileSummaryEditComponent);

