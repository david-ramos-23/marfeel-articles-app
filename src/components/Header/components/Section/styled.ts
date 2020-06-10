import styled from 'styled-components';

import { StyledItemProps } from './types';

export const StyledNav = styled.nav`
  display: flex;
  height: 20px;
  overflow: hidden;
  justify-content: center;

  font-family: '${(props) => props.theme.header.fontFamily}', sans-serif;
  font-size: ${(props) => props.theme.header.section.fontSize};
  font-weight: ${(props) => props.theme.header.section.fontWeight};
`;

export const StyledList = styled.ul`
  display: inline-flex;
  align-items: flex-start;
  height: 50px;
  padding: 0 ${(props) => props.theme.sizes.size2};
  margin: 0;
  list-style: none;
  overflow: auto;
`;

export const StyledItem = styled.li<StyledItemProps>`
  padding-right: ${(props) => props.theme.sizes.size2};
  color: ${(props) => props.theme.header.section.colour};
  white-space: nowrap;
`;

export const StyledLink = styled.a<StyledItemProps>`
  display: block;
  padding-bottom: ${(props) => props.theme.header.section.itemPadding};
  border-bottom: ${(props) => {
    const { selected } = props;
    const { borderWidth, colour } = props.theme.header.section;
    if (selected) {
      return `${borderWidth} solid ${colour};`;
    }
  }};
  color: inherit;
  text-decoration: none;
`;
