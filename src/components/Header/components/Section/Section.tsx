import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { useSection } from '../../../../hooks';
import { StyledItem, StyledLink, StyledList, StyledNav } from './styled';

export const Section: React.FunctionComponent = () => {
  const [{ selected }, { setSelected }] = useSection();
  const selectSectionItem = (item: string) => (event: Event) => {
    event.preventDefault();
    setSelected(item.toLowerCase());
  };

  return (
    <StyledNav>
      <StyledList>
        <ThemeConsumer>
          {(theme) =>
            theme.header.section.items.map((item: string, key: number) => (
              <StyledItem key={key}>
                <StyledLink
                  onClick={selectSectionItem(item)}
                  selected={selected === item.toLowerCase()}
                  href={`#${key + 1}`}
                >
                  {item}
                </StyledLink>
              </StyledItem>
            ))
          }
        </ThemeConsumer>
      </StyledList>
    </StyledNav>
  );
};
