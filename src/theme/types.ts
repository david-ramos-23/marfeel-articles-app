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
  footer: {
    background: string;
    textColor: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
  };
}
