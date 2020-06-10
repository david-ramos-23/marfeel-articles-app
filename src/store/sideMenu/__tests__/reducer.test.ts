import { sideMenuReducer } from '../reducer';
import * as types from '../types';

describe('SideMenu reducer', () => {
  const initialState: types.SideMenuState = {
    isSideMenuVisible: false,
    activeItem: 0,
  };

  it('should return the initial state', () => {
    expect(sideMenuReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle TOGGLE_SIDE_MENU', () => {
    expect(
      sideMenuReducer(initialState, {
        type: types.TOGGLE_SIDE_MENU,
        status: true,
      })
    ).toEqual({
      isSideMenuVisible: true,
      activeItem: 0,
    });

    expect(
      sideMenuReducer(initialState, {
        type: types.TOGGLE_SIDE_MENU,
        status: undefined,
      })
    ).toEqual({
      isSideMenuVisible: true,
      activeItem: 0,
    });
  });

  it('should handle CHANGE_ACTIVE_ITEM', () => {
    expect(
      sideMenuReducer(initialState, {
        type: types.CHANGE_ACTIVE_ITEM,
        activeItem: 1,
      })
    ).toEqual({
      isSideMenuVisible: false,
      activeItem: 1,
    });
  });
});
