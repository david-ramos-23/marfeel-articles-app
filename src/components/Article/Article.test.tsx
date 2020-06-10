import React from 'react';
import { shallow } from 'enzyme';
import Article from './Article';
import {
  StyledArticleTitle,
  StyledArticleDescription,
  StyledArticleThumbnail,
} from './styled';
import renderer from 'react-test-renderer';
import { StoreStyledProvider } from '../shared/StoreStyledProvider';

describe('<Article />', () => {
  const props = {
    id: 0,
    title: 'Title',
    description: 'Description',
  };

  it('renders correctly', () => {
    const wrapper = renderer
      .create(
        <StoreStyledProvider>
          <Article {...props} />
        </StoreStyledProvider>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders title and description', () => {
    const wrapper = shallow(<Article {...props} />);
    expect(wrapper.find(StyledArticleTitle).text()).toEqual(props.title);
    expect(wrapper.find(StyledArticleDescription).text()).toEqual(
      props.description
    );
  });

  it('renders without an image', () => {
    const wrapper = shallow(<Article {...props} />);
    expect(wrapper.find(StyledArticleThumbnail)).toHaveLength(0);
  });

  it('renders with an image', () => {
    const wrapper = shallow(<Article {...props} thumbnail="some.cool.png" />);
    expect(wrapper.find(StyledArticleThumbnail)).toHaveLength(1);
  });
});
