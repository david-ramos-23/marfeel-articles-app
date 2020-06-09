import {
  changeActiveItem,
  toggleSideMenu,
} from '../../../store/sideMenu/actions';
import { SideMenuState } from '../../../store/sideMenu/types';

export type StateProps = SideMenuState;

export interface DispatchProps {
  toggleSideMenu: typeof toggleSideMenu;
  changeActiveItem: typeof changeActiveItem;
}

export type ReduxConnectProps = StateProps & DispatchProps;
