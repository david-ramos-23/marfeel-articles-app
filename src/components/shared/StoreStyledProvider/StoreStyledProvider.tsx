import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import configureStore from '../../../store';
import { defaultTheme } from '../../../store/theme/theme';
import { SectionProvider } from '../../../hooks/useSection';

export const StoreStyledProvider: React.FunctionComponent = ({ children }) => (
  <Provider store={configureStore()}>
    <ThemeProvider theme={defaultTheme}>
      <SectionProvider>
        <>{children}</>
      </SectionProvider>
    </ThemeProvider>
  </Provider>
);
