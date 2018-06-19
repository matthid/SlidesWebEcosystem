import * as cuid from 'cuid';
import { createStandardAction, createAction } from 'typesafe-actions';

import { CounterModel } from './models';

export const increaseCounter = createAction("INC", resolve => {
  return () => resolve();
});

export const resetCounter = createAction("RST", resolve => {
  return () => resolve();
});

export const decreaseCounter = createAction("DCR", resolve => {
  return () => resolve();
});

export const setState = createAction("SETSTATE", resolve => {
  return (isEnabled: boolean) => resolve(isEnabled);
});
