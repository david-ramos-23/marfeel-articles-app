import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { defaultTheme } from '../store/theme/theme';
import faker from 'faker';

const getArticles = (n) =>
  [...Array(n).keys()].map(() => ({
    id: faker.random.uuid(),
    title: faker.random.words(3),
    description: faker.lorem.paragraph(4),
    thumbnail: `https://picsum.photos/500/320/?image=${faker.random.number(
      233
    )}`,
  }));

const api = new MockAdapter(axios, { delayResponse: 2000 });

api.onGet('/theme').reply(200, {
  theme: {
    ...defaultTheme,
    header: {
      ...defaultTheme.header,
      background: 'white',
      menu: {
        background: 'white',
        color: '#000',
      },
      section: {
        ...defaultTheme.header.section,
        colour: '#000',
      },
    },
  },
});

api.onGet('/home').reply(200, getArticles(10));

api.onGet('/travels').reply(200, getArticles(10));

api.onGet('/tech').reply(200, getArticles(10));

api.onGet('/national').reply(200, getArticles(10));

api.onGet('/international').reply(200, getArticles(10));

export default api;
