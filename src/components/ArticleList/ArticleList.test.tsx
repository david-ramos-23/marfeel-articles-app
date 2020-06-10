import React from 'react';
import { shallow } from 'enzyme';
import { ArticleList } from './ArticleList';
import { StyledArticleList } from './styled';
import renderer from 'react-test-renderer';
import { StoreStyledProvider } from '../shared/StoreStyledProvider';

describe('<ArticleList />', () => {
  const contextData = {
    status: 'ok',
    articles: {
      home: [
        {
          id: 'uuid1',
          title: 'Title 1',
          description: 'Description 1',
        },
        {
          id: 'uuid2',
          title: 'Title 2',
          description: 'Description 2',
        },
        {
          id: 'uuid3',
          title: 'Title 3',
          description: 'Description 3',
        },
      ],
    },
    selected: 'home',
  };

  jest.spyOn(React, 'useContext').mockImplementation(() => contextData);

  it('renders correctly', () => {
    const wrapper = shallow(
      <StoreStyledProvider>
        <ArticleList />
      </StoreStyledProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders all articles', () => {
    const wrapper = shallow(<ArticleList />);
    console.log(wrapper.find(StyledArticleList).children());
    expect(wrapper.find(StyledArticleList).children()).toHaveLength(
      contextData.articles.home.length
    );
  });
});
