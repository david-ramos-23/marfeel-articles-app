import 'normalize.css';
import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import 'react-placeholder/lib/reactPlaceholder.css';
import { ThemeProvider } from 'styled-components';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { SideMenu } from '../components/SideMenu';
import { fonts } from '../config/consts';
import { AppProps } from './types';

export class App extends React.PureComponent<AppProps> {
  public componentDidMount(): void {
    this.props.loadTheme();
  }

  public render(): JSX.Element {
    return (
      <ThemeProvider theme={this.props.theme}>
        <>
          <GoogleFontLoader fonts={fonts} />
          <Header />
          <Main />
          <Footer />
          <SideMenu />
        </>
      </ThemeProvider>
    );
  }
}
