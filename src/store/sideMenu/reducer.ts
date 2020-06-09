import {
  CHANGE_ACTIVE_ITEM,
  SideMenuActionTypes,
  SideMenuState,
  TOGGLE_SIDE_MENU,
} from './types';

const initialState: SideMenuState = {
  isSideMenuVisible: false,
  activeItem: 0,
};

export const sideMenuReducer = (
  state = initialState,
  action: SideMenuActionTypes
): SideMenuState => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU: {
      if (typeof action.status === 'boolean') {
        return {
          ...state,
          isSideMenuVisible: action.status,
        };
      }

      return {
        ...state,
        isSideMenuVisible: !state.isSideMenuVisible,
      };
    }
    case CHANGE_ACTIVE_ITEM: {
      return {
        ...state,
        activeItem: action.activeItem,
      };
    }
    default:
      return state;
  }
};
