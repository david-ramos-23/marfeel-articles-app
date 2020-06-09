import { BurgerMenu } from './BurgerMenu';
import { withReduxConnect } from './withReduxConnect';

export const BurgerMenuContainer = withReduxConnect(BurgerMenu);
