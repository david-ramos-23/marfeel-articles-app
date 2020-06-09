import { connect } from 'react-redux';

import {
  changeActiveItem,
  toggleSideMenu,
} from '../../../store/sideMenu/actions';

import { AppState } from '../../../store';
import { DispatchProps, StateProps } from './types';

export const withReduxConnect = connect<
  StateProps,
  DispatchProps,
  unknown,
  AppState
>(
  (state) => ({
    isSideMenuVisible: state.sideMenu.isSideMenuVisible,
    activeItem: state.sideMenu.activeItem,
  }),
  {
    toggleSideMenu,
    changeActiveItem,
  }
);
