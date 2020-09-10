import 'draft-js/dist/Draft.css';
import React, { Component } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import { connect } from "react-redux";
import _ from "lodash";
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock } from '@fortawesome/free-solid-svg-icons';

import { PanelEdit } from "../../../common/panelEdit";
import { ErrorMessage } from "../../../common/errorMessage";
import { SectionHeader } from "../../../common/sectionHeader";
import { IReducerState } from "../../../helpers";

import { IProfileStateModel, IProfileProps, IProfile, INextRole } from "../modes";
import { defaultProfileState, getProfile, changeBusyState, updateProfile } from "../profileStore";

import { getvalues } from "../defaultValues/valueStore";
import { IExprience } from "../defaultValues/models";


const DragHandle = SortableHandle(() => <FontAwesomeIcon className="mr-3 text-muted" icon={faHandRock} />);

const SortableItem = SortableElement(({ value, expriences, onExprienceSelect }: { value: any, expriences: any[], onExprienceSelect: (index: number, nextRole: INextRole) => void }) => {
    return (
        <li className="list-style-none">
            <Row>
                <Col className="pt-1">
                    <DragHandle />
                    <strong className="text-dark"> #{value.index + 1}</strong>
                    <span className="text-muted ml-3">{value.value.role}</span>
                </Col>
                <Col>
                    <Form.Control as="select" onChange={(event) => {
                        const nextRole = { ...value.value, experience: event.target.value };
                        onExprienceSelect(value.index, nextRole);
                    }} value={value.value.experience}>
                        {expriences.map((exp, i) => {
                            return (
                                <option key={i} value={exp.key}>{exp.value}</option>
                            )
                        })}
                    </Form.Control>
                </Col>
            </Row>
        </li>
    )
});

const SortableList = SortableContainer(({ items, expriences, onExprienceSelect }: { items: INextRole[], expriences: IExprience[], onExprienceSelect: (index: number, nextRole: INextRole) => void }) => {
    return (
        <ul className="list-unstyled">
            {items.map((value: INextRole, index: any) => (
                <SortableItem key={`item-${index}`} index={index} value={{ value, index }} expriences={expriences} onExprienceSelect={onExprienceSelect} />
            ))}
        </ul>
    );
});

export class ProfileIdealRolesEditComponent extends Component<IProfileProps, IProfileStateModel> {
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

    handleInputChange = (event: any, role: any) => {
        let nextRoles = this.state.nextRoles || [];
        if (nextRoles.length >= 5) {
            this.setState({
                ...this.state,
                errorMessage: 'You can not select more then 5'
            })
            return;
        }

        if (event.target.checked) {
            nextRoles = [...nextRoles, { role: role, experience: '', sequence: nextRoles.length + 1 }];
        } else {
            nextRoles = _.filter(nextRoles, (s) => { return s.role != role })
        }

        this.setState({
            ...this.state,
            nextRoles: nextRoles
        })
    };

    onSortEnd = ({ oldIndex, newIndex }: any) => {
        let nextRoles = [...this.state.nextRoles];
        const item = nextRoles[newIndex];
        nextRoles[newIndex] = nextRoles[oldIndex];
        nextRoles[oldIndex] = item;
        nextRoles = _.map(nextRoles, (r, index) => { return { ...r, sequence: index } })

        this.setState({
            ...this.state,
            nextRoles: nextRoles
        })
    };

    onExprienceSelected = (index: number, nextRole: INextRole) => {
        const nextRoles = Object.assign([...this.state.nextRoles], {
            [index]: nextRole
        });

        this.setState({
            ...this.state,
            nextRoles: nextRoles
        })
    }

    render() {
        return (
            <PanelEdit title="Ideal Roles" className="mt-1 pr-0" isBusy={this.props.resumeStateModel.isBusy} onUpdateClick={() => { this.props.updateProfile(this.state) }}>
                <SectionHeader title="What would be your ideal next role? (pick up to 5) *" />
                <div className="mt-3">
                    <SectionHeader title="Software Engineering" />
                </div>
                <ErrorMessage message={this.state.errorMessage} />
                <Row>
                    {this.props.valuesModel.idealRoles.map((role, i) => {
                        const isChecked = !!_.find(this.state.nextRoles, (r) => { return r.role === role });
                        return (
                            <Col md="6" className="mt-3" key={i}>
                                <Form.Check custom checked={isChecked} inline label={role} type="checkbox" id={i + 'id'} onChange={(event: any) => { this.handleInputChange(event, role) }} />
                            </Col>
                        )
                    })}
                </Row>

                {
                    this.state.nextRoles.length < 1 ? null :
                        <>
                            <div className="mt-4">
                                <SectionHeader title="Please select the years of experience per role, and rank them in order of importance to you *" />
                            </div>
                            <Row className="mt-2">
                                <Col md="10">
                                    <div className="top-skill">
                                        <SortableList onSortEnd={this.onSortEnd} items={this.state.nextRoles} expriences={this.props.valuesModel.expriences} onExprienceSelect={this.onExprienceSelected} />
                                    </div>
                                </Col>
                            </Row>
                        </>
                }
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

export const ProfileIdealRolesEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileIdealRolesEditComponent);