import React, { Component } from "react";
import { Card, ListGroup, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { Routes } from "../helpers/routes";
export class TalentSideNav extends Component<any, any> {

    state = {
        baseInfo: [
            { name: 'Profile picture', route: '/profile-edit-basic-info' },
            { name: 'Name', route: '/profile-edit-basic-info' },
            { name: 'Location', route: '/profile-edit-basic-info' },
            { name: 'Social links', route: '/profile-edit-basic-info' }
        ],
        location: [
            { name: 'Contract type', route: '/profile-edit-location' },
            { name: 'Start date', route: '/profile-edit-location' },
            { name: 'Salary', route: '/profile-edit-location' }
        ],
        experience: [
            { name: 'Total experience', route: '/profile-edit-experience' },
            { name: 'Work experience', route: '/profile-edit-experience' }
        ],
        skills: [
            { name: 'Languages', route: '/profile-edit-skills' },
            { name: 'Skills', route: '/profile-edit-skills' }
        ]
    }

    render() {
        return (
            <>
                <Card border="0">
                    <ListGroup variant="flush">
                        <ListGroup.Item>  Your Profile is Complete 100%</ListGroup.Item>
                        <SideMenuItemList name="Basic Info" routes={this.state.baseInfo}></SideMenuItemList>
                        <SideMenuItem name="Summary" route="/profile-edit-summary"></SideMenuItem>
                        <SideMenuItem name="Ideal Roles" route="/profile-edit-ideal-roles"></SideMenuItem>
                        <SideMenuItemList name="Location" routes={this.state.location}></SideMenuItemList>
                        <SideMenuItemList name="Experience" routes={this.state.experience}></SideMenuItemList>
                        <SideMenuItemList name="Skills" routes={this.state.skills}></SideMenuItemList>
                    </ListGroup>
                </Card>
                <Link className="w-100 mt-2 btn btn-outline-primary " to={Routes.profile}>
                    View Profile
                </Link>
            </>
        )
    }
}


class SideMenuItem extends Component<ISideMenuItemProps> {
    render() {
        return (
            <>
                <ListGroup.Item className="cursor-pointer">
                    <Link to={this.props.route}>
                        <FontAwesomeIcon className="text-muted" icon={faCheckCircle}></FontAwesomeIcon>
                        <span className="ml-1 text-dark">{this.props.name}</span>
                    </Link>
                </ListGroup.Item>
            </>
        )
    }
}

class SideMenuItemList extends Component<ISideMenuItemListProps, ISideMenuItemListState> {

    state = {
        collapseState: false
    }

    onAccordionToggleClick = (e: any) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            collapseState: !this.state.collapseState
        })
    }

    render() {
        return (
            <>
                <Accordion className="border-bottom cursor-pointer">
                    <Accordion.Toggle as={ListGroup.Item} eventKey="0" className="border-0" onClick={this.onAccordionToggleClick}>
                        <FontAwesomeIcon icon={faCheckCircle} className="text-muted mr-1"></FontAwesomeIcon>
                        {this.props.name}
                        <FontAwesomeIcon icon={this.state.collapseState ? faAngleUp : faAngleDown} className="float-right mt-1"></FontAwesomeIcon>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <>
                            {this.props.routes.map((route, i) => {
                                return (
                                    <div key={i} className=" side-menu-sub-item">
                                        <Link className="text-dark" to={route.route}>
                                            <div className="item-circle float-left"></div> {route.name}
                                        </Link>
                                    </div>
                                )
                            })}
                        </>
                    </Accordion.Collapse>
                </Accordion>
            </>
        )
    }
}

interface ISideMenuItemProps {
    name: string;
    route: string;
}

interface ISideMenuItemListProps {
    name: string;
    routes: ISideMenuItemProps[];
}

interface ISideMenuItemListState {
    collapseState: boolean;
}