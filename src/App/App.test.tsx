import React from 'react';
import renderer from 'react-test-renderer';

import { App } from './App';

import { StoreStyledProvider } from '../components/shared/StoreStyledProvider';
import { defaultTheme } from '../store/theme/theme';
import { shallow } from 'enzyme';

describe('App', () => {
  const props = {
    theme: defaultTheme,
    loadTheme: jest.fn(),
  };
  let wrapper;

  it('renders without crashing', () => {
    const header = renderer
      .create(
        <StoreStyledProvider>
          <App {...props} />
        </StoreStyledProvider>
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });

  it('loads the theme on componentDidMount', () => {
    wrapper = shallow(<App {...props} />);
    expect(props.loadTheme).toHaveBeenCalled();
  });
});
