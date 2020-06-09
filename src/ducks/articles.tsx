import { combineReducers } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Article } from '../types/Article';
import { getArticles } from '../services/api/articles';
import arrayUnique from '../utils/arrayUnique';

const GET_ARTICLES_STARTED = 'GET_ARTICLES_STARTED';
const GET_ARTICLES_SUCCEEDED = 'GET_ARTICLES_SUCCEEDED';
const GET_ARTICLES_FAILED = 'GET_ARTICLES_FAILED';

interface ByIdState {
  [id: number]: Article;
}

type AllIdsState = Array<number>;

export interface State {
  allIds: AllIdsState;
  byId: ByIdState;
}

const mapArticleId = (singleArticle: Article): number => singleArticle.id;

export function getArticlesThunk(
  section: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<any> => {
    dispatch(getArticlesThunkStarted());
    try {
      const result = await getArticles(section);
      dispatch(getArticlesThunkSucceeded(section, result));
      return result;
    } catch (exception) {
      console.log(exception);
      dispatch(getArticlesThunkFailed());
      throw exception;
    }
  };
}

function getArticlesThunkStarted() {
  return {
    type: GET_ARTICLES_STARTED,
  };
}

function getArticlesThunkSucceeded(section: string, result: Array<Article>) {
  return {
    type: GET_ARTICLES_SUCCEEDED,
    section,
    ...result,
  };
}

function getArticlesThunkFailed() {
  return {
    type: GET_ARTICLES_FAILED,
  };
}

const allIds = (state: AllIdsState = [], action: AnyAction): AllIdsState => {
  switch (action.type) {
    case GET_ARTICLES_SUCCEEDED:
      return arrayUnique([...state, ...action.data.map(mapArticleId)]);
    default:
      return state;
  }
};

const byId = (state: ByIdState = {}, action: AnyAction) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCEEDED:
      return {
        ...state,
        ...action.data.reduce(
          (ac: ByIdState, singleArticle: Article) =>
            Object.assign({}, ac, { [singleArticle.id]: singleArticle }),
          {}
        ),
      };
    default:
      return state;
  }
};

export default combineReducers({
  allIds,
  byId,
});

export const getArticleById = (state: State, id: number) => state.byId[id];
export const getAllArticles = (state: State) =>
  state.allIds.map((id) => state.byId[id]);
