import { INCREAMENT_COUNTER, DECREAMENT_COUNTER } from './testConstants';

import { createReducer } from '../../app/common/util/reducerUtil';

const initialState = {
  data: 42
};

const increamentCounte = (state, payload) => {
  return { ...state, data: state.data + 1 };
};
const decreamentCounte = (state, payload) => {
  return { ...state, data: state.data - 1 };
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
  [DECREAMENT_COUNTER]: decreamentCounte
});
