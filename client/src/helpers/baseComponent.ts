import { Component } from "react";
export abstract class BaseComponent<P, S> extends Component<P, S>{

    handleInputChange = (event: any) => {
        this.onChangeState({ [event.target.name]: event.target.value });
    };

    handleInputCheckedChanged = (event: any) => {
        this.onChangeState({ [event.target.name]: !!event.target.checked });
    };

    changeState = (state: Partial<Readonly<S>>) => {
        this.onChangeState(state);
    }

    private onChangeState = <T>(state: T) => {
        this.setState({
            ...this.state,
            ...state
        })
        this.onHandleInputChanged();
    }


    onHandleInputChanged() { };
}