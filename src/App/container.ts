import { App } from './App';
import { withReduxConnect } from './withReduxConnect';

export const AppContainer = withReduxConnect(App);
