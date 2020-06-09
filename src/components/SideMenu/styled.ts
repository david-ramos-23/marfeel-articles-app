import styled from 'styled-components';

import {
  StyledLinkProps,
  StyledSideMenuProps,
  StyledTransparentProps,
} from './types';

export const StyledTransparent = styled.div<StyledTransparentProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

export const StyledSideMenu = styled.div<StyledSideMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: white;
  flex-direction: column;
  box-shadow: 4px 0px 5px 0px rgba(0,0,0,0.4);
  font-family: '${(props) => props.theme.sideMenu.fontFamily}', sans-serif;
  font-size: ${(props) => props.theme.sideMenu.fontSize};
  font-weight: ${(props) => props.theme.sideMenu.fontWeight};
  transition: transform .2s;
  transform: translate3d(${({ isVisible }) =>
    isVisible ? '0' : '-105%'}, 0, 0);
`;

export const StyledHeader = styled.header`
  background: #000;
  padding: 10px;
  flex-shrink: 0;
`;

export const StyledNav = styled.nav`
  flex-grow: 1;
  overflow: auto;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledItem = styled.li`
  padding: ${({ theme }) => `${theme.sizes.size2} ${theme.sizes.size1}`};
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
`;

export const StyledLink = styled.a<StyledLinkProps>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.sideMenu.linkColorActive : theme.sideMenu.linkColor};
  text-decoration: none;
  display: block;
`;
