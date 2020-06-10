import * as actions from '../actions';
import * as types from '../types';

describe('side menu actions', () => {
  it('should toggle the side menu', () => {
    const expectedAction = {
      type: types.TOGGLE_SIDE_MENU,
      status: true,
    };
    const expectedAction2 = {
      type: types.TOGGLE_SIDE_MENU,
      status: undefined,
    };
    const expectedAction3 = {
      type: types.TOGGLE_SIDE_MENU,
      status: false,
    };

    expect(actions.toggleSideMenu(true)).toEqual(expectedAction);
    expect(actions.toggleSideMenu()).toEqual(expectedAction2);
    expect(actions.toggleSideMenu(false)).toEqual(expectedAction3);
  });

  it('should activate an item', () => {
    const expectedAction = {
      type: types.CHANGE_ACTIVE_ITEM,
      activeItem: 1,
    };

    expect(actions.changeActiveItem(1)).toEqual(expectedAction);
  });
});
