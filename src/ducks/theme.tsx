import { combineReducers } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Theme } from '../types/Theme';
import { ThemeState } from '../store/theme/types';
import { getTheme } from '../services/api/theme';
import logo from './../../assets/img/logo-marfeel.svg';

const GET_THEME_STARTED = 'GET_THEME_STARTED';
const GET_THEME_SUCCEEDED = 'GET_THEME_SUCCEEDED';
const GET_THEME_FAILED = 'GET_THEME_FAILED';

export interface State {
  theme: Theme;
}

export function getThemeThunk(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<any> => {
    dispatch(getThemeThunkStarted());
    try {
      const result = await getTheme();
      dispatch(getThemeThunkSucceeded(result));
      return result;
    } catch (exception) {
      console.log(exception);
      dispatch(getThemeThunkFailed());
      throw exception;
    }
  };
}

function getThemeThunkStarted() {
  return {
    type: GET_THEME_STARTED,
  };
}

function getThemeThunkSucceeded(result: Theme) {
  return {
    type: GET_THEME_SUCCEEDED,
    ...result,
  };
}

function getThemeThunkFailed() {
  return {
    type: GET_THEME_FAILED,
  };
}

const initialThemeState = {
  colors: {
    primary: 'black',
    secondary: 'white',
    gray1: '#E0E0E0',
    gray2: '#f2f2f2',
    gray3: '#b9b9b9',
  },
  sizes: {
    size1: '10px',
    size2: '15px',
    size3: '20px',
    size4: '40px',
    size5: '50px',
  },
  sideMenu: {
    headerBackground: 'rgb(0,0,0)',
    bodyBackground: 'white',
    linkColor: '#b9b9b9',
    linkColorActive: '#de0000',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '16px',
    items: [
      'HOME',
      'MAIN SECTION 1',
      'MAIN SECTION 2',
      'MAIN SECTION 3',
      'MAIN SECTION 4',
      'MAIN SECTION 5',
      'MAIN SECTION 6',
      'MAIN SECTION 7',
      'MAIN SECTION 8',
      'MAIN SECTION 9',
    ],
  },
  header: {
    background: 'rgb(0,0,0)',
    fontFamily: 'Roboto',
    logo: {
      width: '100px',
      height: '25px',
      src: logo,
      title: 'Logo',
    },
    section: {
      fontWeight: '400',
      fontSize: '14px',
      borderWidth: '2px',
      itemPadding: '2px',
      colour: 'white',
      items: [
        'SECTION 1',
        'SECTION 2',
        'SECTION 3',
        'SECTION 4',
        'SECTION 5',
        'SECTION 6',
        'SECTION 7',
        'SECTION 8',
        'SECTION 9',
        'SECTION 10',
      ],
    },
    menu: {
      color: 'white',
      background: 'linear-gradient(to bottom, #fd8d00 0%,#98cd00 100%)',
    },
  },
  footer: {
    background: '#f2f2f2',
    textColor: '#888',
    fontFamily: 'Open Sans',
    fontWeight: '200',
    fontSize: '12px',
  },
};

const theme = (state: ThemeState = initialThemeState, action: AnyAction) => {
  switch (action.type) {
    case GET_THEME_SUCCEEDED:
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  theme,
});

export const getThemeState = (state: State) => state.theme;
