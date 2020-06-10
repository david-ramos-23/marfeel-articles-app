import { themeReducer } from '../reducer';

import * as types from '../types';
import { defaultTheme } from '../theme';

describe('Theme reducer', () => {
  const initialState: types.ThemeState = {
    ...defaultTheme,
  };

  it('should return the initial state', () => {
    expect(themeReducer(initialState, {} as any)).toEqual(initialState);
  });

  it('should handle LOAD_THEME', () => {
    const expectedResult = {
      ...defaultTheme,
      colors: {
        ...defaultTheme.colors,
        primaryColor: 'blue',
      },
    };

    expect(
      themeReducer(initialState, {
        type: types.LOAD_THEME,
        theme: expectedResult,
      })
    ).toEqual(expectedResult);
  });
});
