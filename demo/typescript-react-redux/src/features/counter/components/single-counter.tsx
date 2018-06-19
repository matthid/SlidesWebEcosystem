import * as React from "react";

import { counterModels, counterActions, counterSelectors } from '../';
import { CounterState, CounterActions } from "../reducer";

// Define a model for the current component
interface CounterProps { name: string; val: number; isEnabled: boolean; submit: (action: CounterActions) => any; }

export const Counter = (props: CounterProps) =>
    <div>
        <h1>Counter {props.name} is {props.val}!</h1>
        <button disabled={!props.isEnabled} onClick={() => props.submit(counterActions.decreaseCounter())}>Decrease</button>
        <button disabled={!props.isEnabled} onClick={() => props.submit(counterActions.increaseCounter())}>Increase</button>
        <button onClick={() => props.submit(counterActions.resetCounter())}>Reset</button>
    </div>
    ;