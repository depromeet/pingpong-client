import type { MouseEvent, MouseEventHandler } from 'react';
import { useReducer } from 'react';

interface IState {
  categoryList: string[];
  categoryLength: number;
}

interface IAction {
  type: string;
  category: string;
}

const initialState: IState = {
  categoryList: [],
  categoryLength: 0,
};

const CLICKED_NUMBER = 5;

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'PUSH':
      state.categoryLength++;

      if (state.categoryLength > CLICKED_NUMBER) {
        state.categoryLength = CLICKED_NUMBER;
      } else {
        state.categoryList.push(action.category);
      }

      return { ...state };
    case 'POP':
      state.categoryLength--;

      if (state.categoryLength < 0) {
        state.categoryLength = 0;
      } else {
        state.categoryList.splice(state.categoryList.indexOf(action.category), 1);
      }

      return { ...state };
    default:
      return state;
  }
};

const useCategorySelection = (): [IState, MouseEventHandler] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCategoryClick = (event: MouseEvent<HTMLElement>) => {
    const clickedCategory = event.currentTarget.innerHTML;

    if (state.categoryList.includes(clickedCategory)) {
      dispatch({ type: 'POP', category: clickedCategory });
    } else {
      dispatch({ type: 'PUSH', category: clickedCategory });
    }
  };

  return [state, handleCategoryClick];
};

export default useCategorySelection;
