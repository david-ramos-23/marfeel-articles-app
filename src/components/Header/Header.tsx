import React from 'react';
import { Logo } from '../shared/Logo';
import { BurgerMenu } from './components/BurgerMenu';
import { Section } from './components/Section';
import { StyledHeader, StyledHeaderTitle, StyledHeaderTop } from './styled';

export const Header: React.FunctionComponent = () => (
  <StyledHeader>
    <StyledHeaderTop>
      <BurgerMenu />
      <StyledHeaderTitle>
        <Logo />
      </StyledHeaderTitle>
    </StyledHeaderTop>
    <Section />
  </StyledHeader>
);
