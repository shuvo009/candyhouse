import React, { Component } from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import _ from "lodash";
import { Panel } from "../../../../common/panel";
import { IProfileStateModel } from "../../modes";
export class ProfileIdeakRoles extends Component<IProps> {

    getRating = (experience: string) => {
        switch (experience) {
            case '0..1':
                return 1;
            case '1..2':
                return 2;
            case '2..4':
                return 3;
            case '4..6':
                return 4;
            case '6..8':
                return 5;
            default:
                return 6;
        }
    }

    render() {
        return (
            <>
                <Panel title="Ideal roles">
                    {this.props.profile.nextRoles.map((item, i) => {
                        return (
                            <div className="clearfix" key={i}>
                                <p className="float-left">{item.role}</p>
                                <div className="float-right">
                                    <span className="text-muted mr-2">{item.experience}</span>
                                    <Rating initialRating={this.getRating(item.experience)} stop={6} readonly className="rating-bar"
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

interface IProps {
    profile: IProfileStateModel;
}