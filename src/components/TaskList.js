import React, { useContext } from 'react';

import { MainBox } from './ReusableCss';

import TodoContext from '../store/todo-context';
import SingleTask from './SingleTask';

const TaskList = () => {
  const todoCtx = useContext(TodoContext);

  const todoCheckedHandler = (numId) => {
    todoCtx.checkTodo(numId);
  };

  const todoEditHandler = (todo) => {
    todoCtx.editTodo(todo);
  };

  const todoRemoveHandler = (numId) => {
    todoCtx.deleteSingleTodo(numId);
  };

  return (
    <div>
      <MainBox>
        <h1 style={{ marginTop: 0 }}>Todo List</h1>
        <ul>
          {todoCtx.todos.length === 0 ? (
            <p style={{ textAlign: 'center', padding: 25 }}>No todos</p>
          ) : (
            todoCtx.todos.map((todo) => (
              <SingleTask
                key={todo.numId}
                numId={todo.numId}
                value={todo.value}
                complete={todo.complete}
                edit={todo.edit}
                onChecked={todoCheckedHandler.bind(null, todo.numId)}
                onEdit={todoEditHandler.bind(null, todo)}
                onRemove={todoRemoveHandler.bind(null, todo.numId)}
              />
            ))
          )}
        </ul>
      </MainBox>
    </div>
  );
};

export default TaskList;
