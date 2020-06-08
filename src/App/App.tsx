import 'normalize.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../config/theme';
import { Main } from '../components/Main/Main';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export class App extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <Main />
          <Footer />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
