import React from 'react';

import {
  StyledBurgerMenu,
  StyledBurgerMenuBody,
  StyledBurgerMenuWrapper,
} from './styled';
import { BurgerMenuProps } from './types';

export const BurgerMenu: React.FunctionComponent<BurgerMenuProps> = ({
  showWrapper,
}) => {
  const button = (
    <StyledBurgerMenu>
      <StyledBurgerMenuBody />
    </StyledBurgerMenu>
  );

  if (showWrapper) {
    return <StyledBurgerMenuWrapper>{button}</StyledBurgerMenuWrapper>;
  }

  return button;
};
