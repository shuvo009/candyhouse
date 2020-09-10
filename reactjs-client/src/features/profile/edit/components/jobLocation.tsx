import React, { Component } from "react";
import { InputGroup, Row, Col, Form, FormControl } from 'react-bootstrap';
import _ from "lodash";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

import { SectionHeader } from "../../../../common/sectionHeader";
import { IJobLocation } from "../../modes";


export class JobLocation extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            locations: props.selectedLocations
        }
    }

    componentWillReceiveProps(nextProps: IProps) {
        const isEqual = _.isEqual(nextProps.selectedLocations, this.state.locations);
        if (!isEqual) {
            this.setState({
                locations: nextProps.selectedLocations
            });
        }
    }

    onSelectLocation = (location: string, event: any) => {

        let locations = [...this.state.locations];

        if (event.target.checked) {
            locations = [...locations, { name: location, exceptedSalary: 0 }]
        } else {
            locations = _.filter(locations, (l) => { return l.name != location });
        }

        this.setState({
            ...this.state,
            locations: locations
        });

        this.props.onLocationChange(locations);
    }

    onSalaryChange = (location: string, event: any) => {
        let locations = [...this.state.locations];

        const index = _.findIndex(locations, (lo) => { return lo.name === location });
        locations = Object.assign(locations, {
            [index]: {
                ...this.state.locations[index],
                exceptedSalary: +event.target.value
            }
        });
        this.setState({
            ...this.state,
            locations: locations
        });

        this.props.onLocationChange(locations);
    }

    render() {
        return (
            <>
                <Row>
                    <Col>
                        <SectionHeader title="Where would you like to work?*" />
                    </Col>
                    <Col>
                        <SectionHeader title="What are your minimum salary expectations?*" />
                    </Col>
                </Row>
                {this.props.jobLocations.map((location, i) => {
                    const jobLocation = _.find(this.state.locations, (r) => { return r.name === location });
                    return (
                        <Row key={i}>
                            <Col>
                                <div className="mt-2">
                                    <Form.Check inline custom label={location} type="checkbox" checked={!!jobLocation} id={"location" + i} onChange={(event: any) => { this.onSelectLocation(location, event) }} />
                                </div>
                            </Col>
                            <Col>
                                <InputGroup className="mt-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl type="number" disabled={!jobLocation} placeholder="min. salary for Dhaka" value={jobLocation?.exceptedSalary} onChange={(event: any) => { this.onSalaryChange(location, event) }} />
                                </InputGroup>
                            </Col>
                        </Row>
                    )
                })}
            </>
        )
    }
}

interface IProps {
    jobLocations: string[];
    selectedLocations: IJobLocation[];
    onLocationChange(jobLocations: IJobLocation[]): void;
}

interface IState {
    locations: IJobLocation[];
}