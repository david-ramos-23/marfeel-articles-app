import React from 'react';

import { StyledHeader, StyledHeaderTitle, StyledHeaderTop } from './styled';

import { BurgerMenu } from './components/BurgerMenu';
import { Section } from './components/Section';

export const Header: React.FunctionComponent = () => (
  <StyledHeader>
    <StyledHeaderTop>
      <BurgerMenu />
      <StyledHeaderTitle />
    </StyledHeaderTop>
    <Section />
  </StyledHeader>
);
