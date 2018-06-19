import * as React from "react";
import { connect } from 'react-redux';

import { RootState } from '../../../store';
import { counterModels, counterActions, counterSelectors } from '../';
import { CounterActions } from "../reducer";
import { Counter } from "./single-counter";

const mapStateToProps = (state: RootState, props: {name:string}) => ({
    val: state.counter.counter.currentValue,
    isEnabled: state.counter.isEnabled,
    name: props.name
});

export default connect(mapStateToProps, {
    submit: (act: CounterActions) => act
})(Counter);
