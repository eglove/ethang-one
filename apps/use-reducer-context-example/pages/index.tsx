import { Todo } from '../components/todo/todo';
import { TodoContextWrapper } from '../components/todo/todo-context';

export function Index(): JSX.Element {
  return (
    <TodoContextWrapper>
      <Todo />
    </TodoContextWrapper>
  );
}

export default Index;
