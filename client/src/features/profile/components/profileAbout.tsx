import React, { Component } from "react";
import { Card } from 'react-bootstrap';

export class ProfileAbout extends Component<any, any> {

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
                <Card>
                    <Card.Body>
                        <h5>About</h5>
                        {this.status.profileItems.map((item, i) => {
                            return (
                                <ProfileAboutItem key={i} title={item.title} value={item.value}></ProfileAboutItem>
                            )
                        })}
                    </Card.Body>
                </Card>
            </>
        )
    }
}

class ProfileAboutItem extends Component<IProfileAboutItemProps> {
    render() {
        return (
            <div className="mt-3">
                <h3 className="text-muted m-0 profile-header-text font-weight-normal">
                    {this.props.title}
                </h3>
                <h4 className="text-dark profile-header-text">
                    {this.props.value}
                </h4>
            </div>
        )
    }
}

interface IProfileAboutItemProps {
    title: string;
    value: string;
}