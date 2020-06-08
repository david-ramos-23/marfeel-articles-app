import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { StyledItem, StyledLink, StyledList, StyledNav } from './styled';

export const Section: React.FunctionComponent = () => (
  <StyledNav>
    <StyledList>
      <ThemeConsumer>
        {(theme) =>
          theme.header.section.items.map((item: string, index: number) => (
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
);
