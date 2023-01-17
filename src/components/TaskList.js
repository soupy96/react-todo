import React, { useContext } from 'react';

import { MainBox } from './ReusableCss';

import TodoContext from '../store/todo-context';
import SingleTask from './SingleTask';

const TaskList = () => {
  const todoCtx = useContext(TodoContext);

  const todoCheckedHandler = (numId) => {
    todoCtx.checkTodo(numId);
  };

  const todoEditHandler = (numId) => {
    todoCtx.editTodo(numId);
  };

  const todoRemoveHandler = (numId) => {
    todoCtx.deleteSingleTodo(numId);
  };

  return (
    <div>
      <MainBox>
        <h1 style={{ marginTop: 0 }}>Todo List</h1>
        <ul>
          {/* TODO: write something when there are no todos */}
          {todoCtx.todos.map((todo) => (
            <SingleTask
              key={todo.numId}
              numId={todo.numId}
              name={todo.value}
              complete={todo.complete}
              onChecked={todoCheckedHandler.bind(null, todo.numId)}
              onEdit={todoEditHandler.bind(null, todo.numId)}
              onRemove={todoRemoveHandler.bind(null, todo.numId)}
            />
          ))}
        </ul>
      </MainBox>
    </div>
  );
};

export default TaskList;
