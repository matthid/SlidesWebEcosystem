import * as React from "react";

import { Hello, HelloProps } from "./Hello";

export type MainPageState = {
    counter: number;
};

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class MainPage extends React.Component<HelloProps, MainPageState> {
    constructor(props : HelloProps) {
        super(props);
        this.state = {counter: 0};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }));
      }

    render() {
        return (
            <div>
                <Hello {...this.props} />
                <button onClick={this.handleClick}>
                    Counter {this.state.counter}
                </button>
            </div>
        );
    }
}