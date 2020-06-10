import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import 'jest-styled-components';

import { Header } from './Header';

import { StoreStyledProvider } from '../shared/StoreStyledProvider';
import { HEADER_WAYPOINTS } from '../../config/consts';

describe('Header', () => {
  it('renders without crashing', () => {
    const header = renderer
      .create(
        <StoreStyledProvider>
          <Header />
        </StoreStyledProvider>
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });

  describe('handleScroll method', () => {
    const wrapper: any = shallow(<Header />);

    it('should be displayed the entire header initially', () => {
      expect(wrapper.state()).toEqual({
        isNavigationVisible: true,
        isHeaderVisible: true,
      });
    });

    it(`it should hide the menu when the user scrolls more than ${HEADER_WAYPOINTS.firstWaypoint}`, () => {
      (global as any).scrollY = HEADER_WAYPOINTS.firstWaypoint + 1;
      wrapper.instance().handleScroll();

      expect(wrapper.state()).toEqual({
        isNavigationVisible: false,
        isHeaderVisible: true,
      });
    });

    it(`it should hide the header when the user scrolls more than ${HEADER_WAYPOINTS.secondWaypont}`, () => {
      (global as any).scrollY = HEADER_WAYPOINTS.secondWaypont + 1;
      wrapper.instance().handleScroll();
      expect(wrapper.state()).toEqual({
        isNavigationVisible: false,
        isHeaderVisible: false,
      });
    });
  });
});
