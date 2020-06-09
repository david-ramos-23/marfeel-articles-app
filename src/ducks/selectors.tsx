import * as fromUsers from './users';
import * as fromTheme from './theme';
import * as fromArticles from './articles';

import { ReduxState } from './index';

/* export const getAllUsers = (state: ReduxState) =>
  fromUsers.getAllUsers(state.users);
export const getUserById = (state: ReduxState, id: number) =>
  fromUsers.getUserById(state.users, id);
export const getUsersForPage = (state: ReduxState, page: number) =>
  fromUsers.getUsersForPage(state.users, page);
export const getUsersFeedState = (state: ReduxState) =>
  fromUsers.getUsersFeedState(state.users);
 */
export const getAllArticles = (state: ReduxState) =>
  fromArticles.getAllArticles(state.articles);

export const getArticleById = (state: ReduxState, id: number) =>
  fromArticles.getArticleById(state.articles, id);

export const getTheme = (state: ReduxState) =>
  fromTheme.getThemeState(state.theme);
