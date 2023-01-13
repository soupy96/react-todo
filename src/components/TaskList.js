import React, { useContext } from 'react';

import { MainBox } from './ReusableCss';

import TodoContext from '../store/todo-context';
import SingleTask from './SingleTask';

const TaskList = () => {
  const todoCtx = useContext(TodoContext);

  const todoRemoveHandler = (id) => {
    todoCtx.removeTodo(id);
  };

  const todoAddHandler = (id) => {
    todoCtx.addTodo(id);
  };

  const todoEditHandler = (id) => {
    todoCtx.editTodo(id);
  };

  return (
    <div>
      <MainBox>
        <h1 style={{ marginTop: 0 }}>Todo List</h1>
        <ul>
          {todoCtx.todos.map((todo, index) => (
            <SingleTask key={index} name={todo.name} complete={todo.complete} />
          ))}
        </ul>
      </MainBox>
    </div>
  );
};

export default TaskList;
