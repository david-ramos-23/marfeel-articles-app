import { combineReducers } from 'redux';
import users, { State as UsersState } from './users';
import theme, { State as ThemeState } from './theme';
import articles, { State as ArticleState } from './articles';

import { loadingBarReducer, LoadingBar } from 'react-redux-loading-bar';

export interface ReduxState {
  loadingBar: LoadingBar;
  theme: ThemeState;
  articles: ArticleState;
}

const rootReducer = combineReducers({
  loadingBarReducer,
  theme,
  articles,
});

export default rootReducer;

export * from './selectors';
