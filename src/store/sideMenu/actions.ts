import { CHANGE_ACTIVE_ITEM, TOGGLE_SIDE_MENU } from './types';

export const toggleSideMenu = (status?: boolean) => ({
  type: TOGGLE_SIDE_MENU,
  status,
});

export const changeActiveItem = (activeItem: number) => ({
  type: CHANGE_ACTIVE_ITEM,
  activeItem,
});
