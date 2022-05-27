import { useTodoStateContext } from './todo-context';

interface TodoComponentProperties {
  itemIndex: number;
}

export function TodoComponent({
  itemIndex,
}: TodoComponentProperties): JSX.Element {
  const todoState = useTodoStateContext();

  return <div>{todoState.todoList[itemIndex]}</div>;
}
