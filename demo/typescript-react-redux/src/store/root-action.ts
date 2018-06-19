import { RouterAction, LocationChangeAction } from 'react-router-redux';

import { CounterActions } from '../features/counter';

type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | CounterActions;
