import { ThemeState } from '../../store/theme/types';

export interface StateProps {
  theme: ThemeState;
}

export interface DispatchProps {
  loadTheme: () => void;
}

export type ReduxConnectProps = StateProps & DispatchProps;
