import {
  INCREAMENT_COUNTER,
  DECREAMENT_COUNTER,
  COUNTER_ACTION_FINISHED,
  COUNTER_ACTION_STARTED
} from './testConstants';

export const increamentCounter = () => {
  return {
    type: INCREAMENT_COUNTER
  };
};
export const decreamentCounter = () => {
  return {
    type: DECREAMENT_COUNTER
  };
};

export const startCounterAction = () => {
  return {
    type: COUNTER_ACTION_STARTED
  };
};
export const finishedCounterAction = () => {
  return {
    type: COUNTER_ACTION_FINISHED
  };
};

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const increamentAsync = () => {
  return async dispatch => {
    dispatch(startCounterAction());
    await delay(1000);
    dispatch({ type: INCREAMENT_COUNTER });
    dispatch(finishedCounterAction());
  };
};
export const decreamentAsync = () => {
  return async dispatch => {
    dispatch(startCounterAction());
    await delay(1000);
    dispatch({ type: DECREAMENT_COUNTER });
    dispatch(finishedCounterAction());
  };
};
