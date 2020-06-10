// src/section-context.js
import React from 'react';
import axios from 'axios';

const SectionStateContext = React.createContext();
const SectionDispatchContext = React.createContext();

export const STATUS = {
  LOADING: 'loading',
  ERROR: 'error',
  OK: 'ok',
};

export const ACTION = {
  GET_START: 'getStart',
  GET_SUCCESS: 'getSuccess',
  GET_FAIL: 'getFail',
  SET_SELECTED: 'setSelected',
};

export const sectionReducer = (state, action) => {
  switch (action.type) {
    case ACTION.GET_START: {
      return {
        ...state,
        status: STATUS.LOADING,
      };
    }
    case ACTION.GET_SUCCESS: {
      const articles = action.payload;

      return {
        ...state,
        status: STATUS.OK,
        articles: {
          ...state.articles,
          [state.selected]: articles,
        },
      };
    }
    case ACTION.GET_FAIL: {
      return {
        ...state,
        status: STATUS.ERROR,
      };
    }
    case ACTION.SET_SELECTED: {
      const selected = action.payload;

      return {
        ...state,
        selected,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const initialState = {
  status: STATUS.OK,
  articles: {
    home: [],
    travels: [],
    tech: [],
    national: [],
    international: [],
  },
  selected: 'home',
};

export const SectionProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(sectionReducer, initialState);

  const getSection = async (section) => {
    dispatch({ type: ACTION.GET_START });
    try {
      const response = await axios.get(section);
      dispatch({ type: ACTION.GET_SUCCESS, payload: response.data });
    } catch {
      dispatch({ type: ACTION.GET_ERROR });
    }
  };

  const setSelected = (section) =>
    dispatch({ type: ACTION.SET_SELECTED, payload: section });

  const actions = { getSection, setSelected };

  return (
    <SectionStateContext.Provider value={state}>
      <SectionDispatchContext.Provider value={actions}>
        {children}
      </SectionDispatchContext.Provider>
    </SectionStateContext.Provider>
  );
};

const useSectionState = () => {
  const context = React.useContext(SectionStateContext);
  if (context === undefined) {
    throw new Error('useSectionState must be used within a SectionProvider');
  }
  return context;
};

const useSectionDispatch = () => {
  const context = React.useContext(SectionDispatchContext);
  if (context === undefined) {
    throw new Error('useSectionDispatch must be used within a SectionProvider');
  }
  return context;
};

const useSection = () => [useSectionState(), useSectionDispatch()];

export default useSection;
