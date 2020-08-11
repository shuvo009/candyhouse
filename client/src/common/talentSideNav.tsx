import React, { Component } from "react";
import { Card, ListGroup, Button, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export class TalentSideNav extends Component<any, any> {
    state = {
        baseInfo: [
            { name: 'Profile picture', route: '' },
            { name: 'Name', route: '' },
            { name: 'Location', route: '' },
            { name: 'Social links', route: '' }
        ],
        location: [
            { name: 'Contract type', route: '' },
            { name: 'Start date', route: '' },
            { name: 'Salary', route: '' }
        ],
        experience: [
            { name: 'Total experience', route: '' },
            { name: 'Work experience', route: '' }
        ],
        skills: [
            { name: 'Languages', route: '' },
            { name: 'Skills', route: '' }
        ]
    }

    render() {

        return (
            <>
                <Card border="0">
                    <ListGroup variant="flush">
                        <ListGroup.Item>  Your Profile is Complete 100%</ListGroup.Item>
                        <SideMenuItem name="Privacy"></SideMenuItem>
                        <SideMenuItemList name="Basic Info" routes={this.state.baseInfo}></SideMenuItemList>
                        <SideMenuItem name="Summary"></SideMenuItem>
                        <SideMenuItem name="Ideal Roles"></SideMenuItem>
                        <SideMenuItemList name="Location" routes={this.state.location}></SideMenuItemList>
                        <SideMenuItemList name="Experience" routes={this.state.experience}></SideMenuItemList>
                        <SideMenuItemList name="Skills" routes={this.state.skills}></SideMenuItemList>
                    </ListGroup>
                </Card>
                <Button className="w-100 mt-2" variant="outline-primary">
                    View Profile
                </Button>
            </>
        )
    }
}


class SideMenuItem extends Component<ISideMenuItemProps> {
    render() {
        return (
            <>
                <ListGroup.Item > <FontAwesomeIcon icon={faCheckCircle} className="text-muted"></FontAwesomeIcon>  {this.props.name}</ListGroup.Item>
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
                <Accordion className="border-bottom">
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
                                        <a className="text-dark" href="/">
                                            <div className="item-circle float-left"></div> {route.name}
                                        </a>
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
}

interface ISideMenuItemListProps extends ISideMenuItemProps {
    routes: IRouteItem[];
}

interface ISideMenuItemListState {
    collapseState: boolean;
}

interface IRouteItem {
    name: string;
    route: string;
}