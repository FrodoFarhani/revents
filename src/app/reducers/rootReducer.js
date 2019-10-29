import { combineReducers } from 'redux';
import testReducer from '../../features/testArea/testReducer';
import eventReducer from '../../features/event/eventReducers';
const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer
});

export default rootReducer;
