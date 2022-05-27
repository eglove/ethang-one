import { MouseEvent, useRef, useState } from 'react';

import { TodoComponent } from './todo-component';
import { useTodoDispatchContext, useTodoStateContext } from './todo-context';
import { TodoAction } from './todo-reducer';

export function Todo(): JSX.Element {
  const todoState = useTodoStateContext();
  const todoDispatch = useTodoDispatchContext();

  const inputReference = useRef<HTMLInputElement>();
  const [addTodo, setAddTodo] = useState('');

  const onAddTodoChange = (): void => {
    setAddTodo(inputReference.current.value);
  };

  const handleAddTodo = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    todoDispatch({ action: TodoAction.add, value: addTodo });
  };

  return (
    <div>
      <input
        placeholder="Todo Item"
        ref={inputReference}
        type="text"
        value={addTodo}
        onChange={onAddTodoChange}
      />
      <button type="button" onClick={handleAddTodo}>
        Add Todo
      </button>
      {todoState.todoList.map((todoItem, index) => {
        return <TodoComponent itemIndex={index} key={todoItem} />;
      })}
    </div>
  );
}
