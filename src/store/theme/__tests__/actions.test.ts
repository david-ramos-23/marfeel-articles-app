import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../actions';
import * as types from '../types';
import { defaultTheme } from '../theme';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('theme actions', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should load the theme', () => {
    mock.onGet('/theme').reply(200, {
      theme: defaultTheme,
    });

    const expectedActions = [
      { payload: { scope: 'default' }, type: 'loading-bar/SHOW' },
      { payload: { scope: 'default' }, type: 'loading-bar/HIDE' },
      { type: types.LOAD_THEME, theme: defaultTheme },
    ];

    const store = mockStore({ theme: {} });

    return store.dispatch(actions.loadTheme() as any).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
