import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import Rating from "react-rating"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
export class ProfileIdeakRoles extends Component<any, any> {

    state = {
        items: [
            { title: "Fullstack Engineer", rating: 5, experience: "6-8 years" },
            { title: ".NET Engineer", rating: 5, experience: "6-8 years" },
            { title: "Backend Engineer", rating: 5, experience: "6-8 years" },
            { title: "Javascript Backend Engineer", rating: 3, experience: "2-4 years" },
        ]
    }

    render() {
        return (
            <>
                <Card>
                    <Card.Body>
                        <h5>Ideal roles</h5>
                        {this.state.items.map((item, i) => {
                            return (
                                <ProfileIdeakRoleItem key={i} experience={item.experience} rating={item.rating} title={item.title}></ProfileIdeakRoleItem>
                            )
                        })}

                    </Card.Body>
                </Card>
            </>
        )
    }
}

class ProfileIdeakRoleItem extends Component<IProfileIdeakRoleItemPops> {
    render() {
        return (
            <div className="clearfix">
                <p className="float-left">{this.props.title}</p>
                <div className="float-right">
                    <span className="text-muted mr-2">{this.props.experience}</span>
                    <Rating initialRating={this.props.rating} stop={6} readonly className="rating-bar"
                        fullSymbol={<FontAwesomeIcon icon={faCircle} className="text-primary"></FontAwesomeIcon>}
                        emptySymbol={<FontAwesomeIcon icon={faCircle} className="text-muted"></FontAwesomeIcon>}
                        fractions={2}
                    ></Rating>
                </div>

            </div>
        )
    }
}

interface IProfileIdeakRoleItemPops {
    title: string;
    experience: string;
    rating: number;
}