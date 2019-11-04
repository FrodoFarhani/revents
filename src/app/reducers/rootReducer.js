import { combineReducers } from 'redux';
import testReducer from '../../features/testArea/testReducer';
import eventReducer from '../../features/event/eventReducers';
import modalsReducer from '../../features/modals/modalReducers';
import AuthReducer from '../../features/auth/AuthReducer';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalsReducer,
  auth: AuthReducer
});

export default rootReducer;
