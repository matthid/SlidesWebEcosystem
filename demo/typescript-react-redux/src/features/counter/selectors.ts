import { createSelector } from 'reselect';

import { CounterState } from './reducer';

export const getCounter = (state: CounterState) => state.counter;

export const isEnabled = (state: CounterState) => state.isEnabled;

