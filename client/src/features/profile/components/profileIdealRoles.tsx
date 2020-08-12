import React, { Component } from "react";
import Rating from "react-rating"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Panel } from "../../../common/panel"
export class ProfileIdeakRoles extends Component<any, IProfileIdealRoleState> {

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
                <Panel title="Ideal roles">
                    {this.state.items.map((item, i) => {
                        return (
                            <div className="clearfix" key={i}>
                                <p className="float-left">{item.title}</p>
                                <div className="float-right">
                                    <span className="text-muted mr-2">{item.experience}</span>
                                    <Rating initialRating={item.rating} stop={6} readonly className="rating-bar"
                                        fullSymbol={<FontAwesomeIcon icon={faCircle} className="text-primary"></FontAwesomeIcon>}
                                        emptySymbol={<FontAwesomeIcon icon={faCircle} className="text-muted"></FontAwesomeIcon>}
                                        fractions={2}
                                    ></Rating>
                                </div>
                            </div>
                        )
                    })}
                </Panel>

            </>
        )
    }
}

interface IProfileIdealRoleState {
    items: IProfileIdealRoleItem[];
}

interface IProfileIdealRoleItem {
    title: string;
    experience: string;
    rating: number;
}