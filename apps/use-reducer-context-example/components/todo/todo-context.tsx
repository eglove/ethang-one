import { faker } from '@faker-js/faker';
import { createContext, Dispatch, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

import { TodoActionType, todoReducer, TodoStateType } from './todo-reducer';

interface TodoContextWrapperProperties {
  children: JSX.Element | JSX.Element[];
}

export const INITIAL_TODO_STATE: TodoStateType = {
  todoList: Array.from({ length: 50 }, () => {
    return faker.random.alpha(10);
  }),
};

export const TodoStateContext =
  createContext<TodoStateType>(INITIAL_TODO_STATE);
TodoStateContext.displayName = 'TodoState';

// @ts-expect-error Immer will handle default
export const TodoDispatchContext = createContext<Dispatch<TodoActionType>>();
TodoDispatchContext.displayName = 'TodoDispatch';

export function TodoContextWrapper({
  children,
}: TodoContextWrapperProperties): JSX.Element {
  const [todoState, todoDispatch] = useImmerReducer(
    todoReducer,
    INITIAL_TODO_STATE
  );

  return (
    <TodoDispatchContext.Provider value={todoDispatch}>
      <TodoStateContext.Provider value={todoState}>
        {children}
      </TodoStateContext.Provider>
    </TodoDispatchContext.Provider>
  );
}

export const useTodoStateContext = (): TodoStateType => {
  return useContext(TodoStateContext);
};

export const useTodoDispatchContext = (): Dispatch<TodoActionType> => {
  return useContext(TodoDispatchContext);
};
