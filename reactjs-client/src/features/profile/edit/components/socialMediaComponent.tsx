import React from "react";
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import _ from "lodash";

import { ISocialMedia } from "../../defaultValues/models";
import { BaseComponent } from "../../../../helpers";

export class SocialMediaComponent extends BaseComponent<ISocialMediaComponentProps, ISocialMediaComponentState> {

    state = {
        value: ''
    }

    componentWillReceiveProps(nextProps: ISocialMediaComponentProps) {
        const isEqual = _.isEqual(nextProps.value, this.state.value);
        if (!isEqual) {
            this.setState({
                ...nextProps
            });
        }
    }
    onHandleInputChanged(data: any) {
        this.props.onChange(this.props.name, data.value);
    }

    getIcon = (name: string) => {
        switch (name) {
            case 'Github':
                return faGithub;
            case 'LinkedIn':
                return faLinkedinIn;
            case 'StackOverflow':
                return faStackOverflow;
            default:
                return faGlobe;
        }
    }

    render() {
        return (
            <Form.Group>
                <Form.Label className="font-weight-semi-bold">{this.props.name}</Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text><FontAwesomeIcon icon={this.getIcon(this.props.name)}></FontAwesomeIcon></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl name="value" placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleInputChange} />
                </InputGroup>
            </Form.Group>
        )
    }
}

interface ISocialMediaComponentProps extends ISocialMedia {
    value: string;
    onChange(name: string, value: string): void;
}

interface ISocialMediaComponentState {
    value: string;
}