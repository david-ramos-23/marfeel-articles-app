import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { StyledMain, StyledMainMediaBlock } from './styled';

export const Main: React.FunctionComponent = () => (
  <ThemeConsumer>
    {(theme) => (
      <StyledMain>
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
        <StyledMainMediaBlock color={theme.colors.gray1} rows={4} />
      </StyledMain>
    )}
  </ThemeConsumer>
);
