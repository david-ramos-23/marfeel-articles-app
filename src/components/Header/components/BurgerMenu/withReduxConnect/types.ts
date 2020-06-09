import { toggleSideMenu } from '../../../../../store/sideMenu/actions';

export interface DispatchProps {
  toggleSideMenu: typeof toggleSideMenu;
}

export type ReduxConnectProps = DispatchProps;
