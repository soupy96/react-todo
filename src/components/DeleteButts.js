import { useContext } from 'react';

import TodoContext from '../store/todo-context';
import DeleteAllTasks from './DeleteAllTasks';
import DeleteDoneTasks from './DeleteDoneTasks';
import { DeleteButtBox } from './ReusableCss';

const DeleteButts = () => {
  const todoCtx = useContext(TodoContext);

  const todoDeleteDoneHandler = (id) => {
    todoCtx.deleteAllDoneTodo(id);
  };

  const todoDeleteAllHandler = (numId) => {
    todoCtx.deleteAllTodo(numId);
  };

  return (
    <DeleteButtBox>
      <DeleteDoneTasks
        onDeleteAllDone={todoDeleteDoneHandler.bind(null, todoCtx.todos.numId)}
      />
      <DeleteAllTasks
        onDeleteAll={todoDeleteAllHandler.bind(null, todoCtx.todos.numId)}
      />
    </DeleteButtBox>
  );
};

export default DeleteButts;
