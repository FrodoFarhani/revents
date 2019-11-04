import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
export const configureStore = preloadedState => {
  //thunk is a middleware so we added it here in middleware array
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  // for hot replacement without refreshing the page
  if (process.env.NODE_ENV) {
    if (module.hot) {
      module.hot.accept('../reducers/rootReducer', () => {
        const newRootReducer = require('../reducers/rootReducer').default;
        store.replaceReducer(newRootReducer);
      });
    }
  }
  return store;
};
