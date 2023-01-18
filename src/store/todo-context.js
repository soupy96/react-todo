import React from 'react';

const TodoContext = React.createContext({
  todos: [],
  addTodo: (todo) => {},
  checkTodo: (numId) => {},
  editTodo: (numId) => {},
  saveTodo: (todo) => {},
  deleteSingleTodo: (numId) => {},
  deleteAllDoneTodo: (numId) => {},
  deleteAllTodo: (numId) => {},
});

export default TodoContext;
