import { LOAD_THEME, ThemeActionTypes, ThemeState } from './types';
import { defaultTheme } from './theme';

const initialState: ThemeState = {
  ...defaultTheme,
};

export const themeReducer = (
  state = initialState,
  action: ThemeActionTypes
): ThemeState => {
  switch (action.type) {
    case LOAD_THEME: {
      return {
        ...state,
        ...action.theme,
      };
    }
    default:
      return state;
  }
};
