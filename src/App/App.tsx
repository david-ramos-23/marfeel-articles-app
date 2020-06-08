import 'normalize.css';
import React from 'react';
import 'react-placeholder/lib/reactPlaceholder.css';
import { ThemeProvider } from 'styled-components';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main/Main';
import { fonts } from '../config/fonts';
import { theme } from '../config/theme';
import GoogleFontLoader from 'react-google-font-loader';

export class App extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GoogleFontLoader fonts={fonts} />
          <Header />
          <Main />
          <Footer />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
