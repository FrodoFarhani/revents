import {
  INCREAMENT_COUNTER,
  DECREAMENT_COUNTER,
  COUNTER_ACTION_FINISHED,
  COUNTER_ACTION_STARTED
} from './testConstants';

import { createReducer } from '../../app/common/util/reducerUtil';
//import { increamentAsync, decreamentAsync } from './testActions';

const initialState = {
  data: 42,
  loading: false
};

const increamentCounte = (state, payload) => {
  return { ...state, data: state.data + 1 };
};
const decreamentCounte = (state, payload) => {
  return { ...state, data: state.data - 1 };
};

export const counterActionStarted = (state, payload) => {
  return {
    ...state,
    loading: true
  };
};
export const counterActionFinished = (state, payload) => {
  return {
    ...state,
    loading: false
  };
};

/**
 * by using reducer util we change our code because this code is more cleaner
 */
/* const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREAMENT_COUNTER:
      return { ...state, data: state.data + 1 };

    case DECREAMENT_COUNTER:
      return { ...state, data: state.data - 1 };

    default:
      return state;
  }
}; */
//export default testReducer;

export default createReducer(initialState, {
  [INCREAMENT_COUNTER]: increamentCounte,
  [DECREAMENT_COUNTER]: decreamentCounte,
  [COUNTER_ACTION_FINISHED]: counterActionFinished,
  [COUNTER_ACTION_STARTED]: counterActionStarted
});
