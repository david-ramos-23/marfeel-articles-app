import React from 'react';
import { ThemeConsumer } from 'styled-components';

import { StyledLogo } from './styled';

export const Logo: React.FunctionComponent = () => (
  <ThemeConsumer>
    {(theme) => (
      <StyledLogo src={theme.header.logo.src} alt={theme.header.logo.title} />
    )}
  </ThemeConsumer>
);
