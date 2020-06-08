export interface ThemeProps {
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
  };
}
