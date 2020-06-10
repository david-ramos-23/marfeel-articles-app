import 'normalize.css';
import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import 'react-placeholder/lib/reactPlaceholder.css';
import { ThemeProvider } from 'styled-components';
import { ArticleList } from '../components/ArticleList';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SideMenu } from '../components/SideMenu';
import { fonts } from '../config/consts';
import { SectionProvider } from '../hooks/useSection';
import api from '../services';
import { AppProps } from './types';

export class App extends React.PureComponent<AppProps> {
  public componentDidMount(): void {
    this.props.loadTheme();
  }

  public componentWillUnmount(): void {
    api.restore();
  }

  public render(): JSX.Element {
    return (
      <ThemeProvider theme={this.props.theme}>
        <>
          <GoogleFontLoader fonts={fonts} />
          <SectionProvider>
            <Header />
            <ArticleList />
          </SectionProvider>
          <Footer />
          <SideMenu />
        </>
      </ThemeProvider>
    );
  }
}
