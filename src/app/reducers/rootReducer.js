import { combineReducers } from 'redux';
import testReducer from '../../features/testArea/testReducer';
import eventReducer from '../../features/event/eventReducers';

import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer
});

export default rootReducer;
