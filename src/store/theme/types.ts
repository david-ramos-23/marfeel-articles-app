export interface ThemeState {
  colors: {
    [color: string]: string;
  };
  sizes: {
    [size: string]: string;
  };
  sideMenu: {
    headerBackground: string;
    bodyBackground: string;
    linkColor: string;
    linkColorActive: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    items: string[];
  };
  header: {
    background: string;
    fontFamily: string;
    logo: {
      width: string;
      height: string;
      src: string;
      title: string;
    };
    section: {
      fontWeight: string;
      fontSize: string;
      borderWidth: string;
      itemPadding: string;
      colour: string;
      items: string[];
    };
    menu: {
      color: string;
      background: string;
    };
  };
  articles: {
    fontFamily: string;
  };
  footer: {
    background: string;
    textColor: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
  };
}

// Describing the different ACTION NAMES available
export const LOAD_THEME = 'LOAD_THEME';

interface LoadThemeAction {
  type: typeof LOAD_THEME;
  theme: ThemeState;
}

export type ThemeActionTypes = LoadThemeAction;
