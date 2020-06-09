import { SideMenu } from './SideMenu';
import { withReduxConnect } from './withReduxConnect/withReduxConnect';

export const SideMenuContainer = withReduxConnect(SideMenu);
