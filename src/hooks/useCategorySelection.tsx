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

const SELECTED_CATEGORY_COUNT = 5;

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'PUSH':
      if (state.categoryLength < SELECTED_CATEGORY_COUNT) {
        state.categoryList.push(action.category);
      }
      break;
    case 'POP':
      if (state.categoryLength > 0) {
        state.categoryList.splice(state.categoryList.indexOf(action.category), 1);
      }
      break;
    default:
      break;
  }
  state.categoryLength = state.categoryList.length;
  return state;
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
