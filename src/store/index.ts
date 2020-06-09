import { loadingBarReducer } from 'react-redux-loading-bar';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { sideMenuReducer } from './sideMenu/reducer';
import { themeReducer } from './theme/reducer';

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
  theme: themeReducer,
  loadingBar: loadingBarReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
};

export default configureStore;
