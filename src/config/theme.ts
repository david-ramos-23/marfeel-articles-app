import logo from '../../assets/img/logo-marfeel.svg';
import { ThemeProps } from './types';

export const theme: ThemeProps = {
  colors: {
    primary: 'black',
    secondary: 'white',
  },
  sizes: {
    size1: '10px',
    size2: '15px',
    size3: '20px',
    size4: '40px',
    size5: '50px',
  },
  sideMenu: {
    headerBackground: 'rgb(2,0,36)',
    bodyBackground: 'white',
    linkColor: '#b9b9b9',
    linkColorActive: '#de0000',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '16px',
    items: [
      'HOME',
      'MAIN SECTION 1',
      'MAIN SECTION 2',
      'MAIN SECTION 3',
      'MAIN SECTION 4',
      'MAIN SECTION 5',
      'MAIN SECTION 6',
      'MAIN SECTION 7',
      'MAIN SECTION 8',
      'MAIN SECTION 9',
    ],
  },
  header: {
    background: 'rgb(0,0,0)',
    fontFamily: 'Roboto',
  },
  footer: {
    background: '#f2f2f2',
    textColor: '#888',
    fontFamily: 'Open Sans',
    fontWeight: '200',
    fontSize: '12px',
  },
};
