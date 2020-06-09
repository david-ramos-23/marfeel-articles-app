import React from 'react';

import {
  StyledBurgerMenu,
  StyledBurgerMenuBody,
  StyledBurgerMenuWrapper,
} from './styled';
import { BurgerMenuProps } from './types';

export class BurgerMenu extends React.PureComponent<BurgerMenuProps> {
  public render(): JSX.Element {
    const { showWrapper } = this.props;

    const button = (
      <StyledBurgerMenu onClick={this.handleClick}>
        <StyledBurgerMenuBody />
      </StyledBurgerMenu>
    );

    if (showWrapper) {
      return <StyledBurgerMenuWrapper>{button}</StyledBurgerMenuWrapper>;
    }

    return button;
  }

  private handleClick = () => {
    this.props.toggleSideMenu();
  };
}
