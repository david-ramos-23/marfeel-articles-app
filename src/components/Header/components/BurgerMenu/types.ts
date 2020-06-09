import { ReduxConnectProps } from './withReduxConnect';

export type ComposedProps = ReduxConnectProps;

export interface OwnProps {
  showWrapper?: boolean;
}

export type BurgerMenuProps = OwnProps & ComposedProps;
