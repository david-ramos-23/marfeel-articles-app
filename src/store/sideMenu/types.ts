// Describing the shape of the side menu's slice of state
export interface SideMenuState {
  isSideMenuVisible: boolean;
  activeItem: number;
}

// Describing the different ACTION NAMES available
export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU';
export const CHANGE_ACTIVE_ITEM = 'CHANGE_ACTIVE_ITEM';

interface ToggleSideMenuAction {
  type: typeof TOGGLE_SIDE_MENU;
  status?: boolean;
}

interface ChangeActiveItemAction {
  type: typeof CHANGE_ACTIVE_ITEM;
  activeItem: number;
}

export type SideMenuActionTypes = ToggleSideMenuAction | ChangeActiveItemAction;
