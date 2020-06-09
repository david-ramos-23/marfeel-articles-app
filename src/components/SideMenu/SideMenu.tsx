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
  StyledTransparent,
} from './styled';

import { SideMenuProps } from './types';

export const SideMenu: React.FunctionComponent<SideMenuProps> = ({
  isSideMenuVisible,
  toggleSideMenu,
  changeActiveItem,
  activeItem,
}) => {
  const handleClick = () => toggleSideMenu(false);

  const handleLinkClick = (index: number) => () => {
    changeActiveItem(index);
    toggleSideMenu(false);
  };

  return (
    <>
      <StyledTransparent onClick={handleClick} isVisible={isSideMenuVisible} />
      <StyledSideMenu isVisible={isSideMenuVisible}>
        <StyledHeader>
          <Logo />
        </StyledHeader>
        <StyledNav>
          <StyledList>
            <ThemeConsumer>
              {(theme) =>
                theme.sideMenu.items.map((item: string, index: number) => (
                  <StyledItem key={index}>
                    <StyledLink
                      isActive={index === activeItem}
                      href={`#${index + 1}`}
                      onClick={handleLinkClick(index)}
                    >
                      {item}
                    </StyledLink>
                  </StyledItem>
                ))
              }
            </ThemeConsumer>
          </StyledList>
        </StyledNav>
      </StyledSideMenu>
    </>
  );
};
