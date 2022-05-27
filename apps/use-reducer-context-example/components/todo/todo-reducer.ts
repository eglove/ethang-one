export type TodoStateType = {
  todoList: string[];
};

export enum TodoAction {
  add = 'add',
}

export type TodoActionType = { action: TodoAction; value: unknown };

export const todoReducer = (
  draft: TodoStateType,
  action: TodoActionType
): void => {
  // eslint-disable-next-line sonarjs/no-small-switch,default-case
  switch (action.action) {
    case TodoAction.add: {
      if (typeof action.value !== 'string') {
        return;
      }

      draft.todoList = [...draft.todoList, action.value];
    }
  }
};
