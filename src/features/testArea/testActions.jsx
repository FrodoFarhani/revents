import { INCREAMENT_COUNTER, DECREAMENT_COUNTER } from './testConstants';

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
