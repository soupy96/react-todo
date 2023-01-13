import React, { useReducer } from 'react';

import TodoContext from './todo-context';

const defaultTodoState = {
  todos: [
    { name: 'cooking', complete: false },
    { name: 'playing', complete: true },
  ],
};

const todoReducer = (state, action) => {
  if (action.type === 'ADD_TODO') {
  }
  if (action.type === 'CHECK_TODO') {
  }
  if (action.type === 'EDIT_TODO') {
  }
  if (action.type === 'DELETE_SINGLE_TODO') {
  }
  if (action.type === 'DELETE_ALL_DONE_TODO') {
  }
  if (action.type === 'DELETE_ALL_TODO') {
  }
  return defaultTodoState;
};

const TodoProvider = (props) => {
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoState
  );

  const addTodoHandler = (id) => {
    dispatchTodoAction({ type: 'ADD_TODO', id: id });
  };

  const checkTodoHandler = (id) => {
    dispatchTodoAction({ type: 'CHECK_TODO', id: id });
  };

  const editTodoHandler = (id) => {
    dispatchTodoAction({ type: 'EDIT_TODO', id: id });
  };

  const deleteSingleTodoHandler = (id) => {
    dispatchTodoAction({ type: 'DELETE_SINGLE_TODO', id: id });
  };

  const deleteAllDoneTodoHandler = (id) => {
    dispatchTodoAction({ type: 'DELETE_ALL_DONE_TODO', id: id });
  };

  const deleteAllTodoHandler = (id) => {
    dispatchTodoAction({ type: 'DELETE_ALL_TODO', id: id });
  };

  const todoContext = {
    todos: todoState.todos,
    addTodo: addTodoHandler,
    checkTodo: checkTodoHandler,
    editTodo: editTodoHandler,
    deleteSingleTodo: deleteSingleTodoHandler,
    deleteAllDoneTodo: deleteAllDoneTodoHandler,
    deleteAllTodo: deleteAllTodoHandler,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
