import 'normalize.css';
import React from 'react';
import 'react-placeholder/lib/reactPlaceholder.css';
import { ThemeProvider } from 'styled-components';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main/Main';
import { fonts } from '../theme/fonts';
import GoogleFontLoader from 'react-google-font-loader';
import theme from '../theme';
import configureStore from '../store';
import { Provider } from 'react-redux';

export class App extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <Provider store={configureStore()}>
        <ThemeProvider theme={theme}>
          <>
            <GoogleFontLoader fonts={fonts} />
            <Header />
            <Main />
            <Footer />
          </>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
