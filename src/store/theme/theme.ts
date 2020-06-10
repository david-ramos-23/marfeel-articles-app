import { ThemeState } from './types';
import logo from './../../assets/img/logo-marfeel.svg';

export const defaultTheme: ThemeState = {
  colors: {
    primary: 'black',
    secondary: 'white',
    gray1: '#E0E0E0',
    gray2: '#f2f2f2',
    gray3: '#b9b9b9',
  },
  sizes: {
    size1: '10px',
    size2: '15px',
    size3: '20px',
    size4: '40px',
    size5: '50px',
  },
  sideMenu: {
    headerBackground: 'rgb(0,0,0)',
    bodyBackground: 'white',
    linkColor: '#b9b9b9',
    linkColorActive: '#de0000',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '16px',
    items: ['HOME', 'TRAVELS', 'TECH', 'NATIONAL', 'INTERNATIONAL'],
  },
  header: {
    background: 'rgb(0,0,0)',
    fontFamily: 'Roboto',
    logo: {
      width: '100px',
      height: '25px',
      src: logo,
      title: 'Logo',
    },
    section: {
      fontWeight: '400',
      fontSize: '14px',
      borderWidth: '2px',
      itemPadding: '2px',
      colour: 'white',
      items: ['HOME', 'TRAVELS', 'TECH', 'NATIONAL', 'INTERNATIONAL'],
    },
    menu: {
      color: 'white',
      background: 'black',
    },
  },
  articles: {
    fontFamily: 'Open Sans',
  },
  footer: {
    background: '#f2f2f2',
    textColor: '#888',
    fontFamily: 'Open Sans',
    fontWeight: '200',
    fontSize: '12px',
  },
};
