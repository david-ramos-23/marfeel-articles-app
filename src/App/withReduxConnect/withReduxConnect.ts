import { connect } from 'react-redux';

import { AppState } from '../../store';
import { DispatchProps, StateProps } from './types';

import { loadTheme } from '../../store/theme/actions';

export const withReduxConnect = connect<
  StateProps,
  DispatchProps,
  unknown,
  AppState
>(
  (state) => ({
    theme: state.theme,
  }),
  {
    loadTheme,
  }
);
