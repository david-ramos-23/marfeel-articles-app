import { useReducer } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { sectionReducer, initialState, ACTION, STATUS } from './useSection';

describe('useSection: Section reducer', () => {
  it('throws if unknown action type is dispatched', () => {
    const { result } = renderHook(() =>
      useReducer(sectionReducer, initialState)
    );
    console.log('result', result.current);
    const [, dispatch] = result.current;

    const actionType = 'INCREMENT';

    act(() => {
      dispatch({ type: actionType });
    });
    console.log('result', result.error);
    expect(result.error).toEqual(Error(`Unhandled action type: ${actionType}`));
  });

  it("status is set to 'loading' when get starts", () => {
    const { result } = renderHook(() =>
      useReducer(sectionReducer, initialState)
    );
    const [, dispatch] = result.current;

    act(() => {
      dispatch({ type: ACTION.GET_START });
    });

    const [state] = result.current;
    expect(state.status).toEqual(STATUS.LOADING);
  });

  it("status is set to 'error' when get fails", () => {
    const { result } = renderHook(() =>
      useReducer(sectionReducer, initialState)
    );
    const [, dispatch] = result.current;

    act(() => {
      dispatch({ type: ACTION.GET_FAIL });
    });

    const [state] = result.current;
    expect(state.status).toEqual(STATUS.ERROR);
  });

  it('articles are assigned to the correct list after get', () => {
    const { result } = renderHook(() =>
      useReducer(sectionReducer, initialState)
    );
    const [, dispatch] = result.current;

    const selected = 'travels';
    const articles = [
      {
        id: 1,
        title: 'Title 1',
        description: 'Description 1',
      },
      {
        id: 1,
        title: 'Title 2',
        description: 'Description 2',
      },
    ];

    act(() => {
      dispatch({ type: ACTION.SET_SELECTED, payload: selected });
      dispatch({ type: ACTION.GET_SUCCESS, payload: articles });
    });

    const [state] = result.current;
    expect(state.selected).toEqual(selected);
    expect(state.articles[selected].length).toEqual(articles.length);
  });
});
