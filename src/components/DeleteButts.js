import { useContext } from 'react';
import styled from 'styled-components';

import TodoContext from '../store/todo-context';
import DeleteAllTasks from './DeleteAllTasks';
import DeleteDoneTasks from './DeleteDoneTasks';

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

const DeleteButtBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default DeleteButts;
