import React from 'react';
import { ThemeConsumer } from 'styled-components';

import { Logo } from '../shared/Logo';
import {
  StyledHeader,
  StyledItem,
  StyledLink,
  StyledList,
  StyledNav,
  StyledSideMenu,
} from './styled';

export const SideMenu: React.FunctionComponent = () => {
  return (
    <StyledSideMenu>
      <StyledHeader>
        <Logo />
      </StyledHeader>
      <StyledNav>
        <StyledList>
          <ThemeConsumer>
            {(theme) =>
              theme.sideMenu.items.map((item: string, index: number) => (
                <StyledItem key={index}>
                  <StyledLink isActive={index === 0} href={`#${index + 1}`}>
                    {item}
                  </StyledLink>
                </StyledItem>
              ))
            }
          </ThemeConsumer>
        </StyledList>
      </StyledNav>
    </StyledSideMenu>
  );
};
