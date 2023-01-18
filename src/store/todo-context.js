import React from 'react';

const TodoContext = React.createContext({
  todos: [],
  addTodo: (todo) => {},
  checkTodo: (numId) => {},
  editTodo: (numId) => {},
  saveTodo: (editValue) => {},
  deleteSingleTodo: (numId) => {},
  deleteAllDoneTodo: (numId) => {},
  deleteAllTodo: (numId) => {},
});

export default TodoContext;
