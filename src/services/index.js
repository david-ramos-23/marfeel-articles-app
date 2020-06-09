// import fetch from "./fetch";

// const BASE_URL = "http://localhost:3001";

// const fetchConfig = () => fetch(`${BASE_URL}/config`);

// const fetchSection = section =>
//   fetch(`${BASE_URL}/${section}`).then(({ articles }) => articles);

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { defaultTheme } from '../store/theme/theme';

const getTheme = new MockAdapter(axios, { delayResponse: 2000 });

getTheme.onGet('/theme').reply(200, {
  theme: {
    ...defaultTheme,
    header: {
      ...defaultTheme.header,
      background: '#fff',
      menu: {
        ...defaultTheme.header.menu,
        color: '#000',
      },
      section: {
        ...defaultTheme.header.section,
        colour: '#000',
      },
    },
  },
});

export default {
  getTheme,
};
