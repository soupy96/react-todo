import React from 'react';

const TodoContext = React.createContext({
  todos: [
    { name: 'cooking', complete: false },
    { name: 'playing', complete: true },
  ],
  addTodo: (item) => {},
  removeTodo: (id) => {},
  editTodo: (id) => {},
});

export default TodoContext;
