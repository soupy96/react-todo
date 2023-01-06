import React, { useReducer } from 'react';

import TodoContext from './todo-context';

// this is the inital todo state when the page is loaded
const defaultTodoState = {};

// const defaultCartState = {
//     items: [],
//     totalAmount: 0,
//   };

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
  // the first element in this array is the state snapshot
  // the second element in this array is a function which allows us to dispatch an action to the reducer
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoState
  );

  const addTodoHandler = (id) => {
    // gives the reducer a certain action that we set and then in the reducer, do something on that specifc action
    // we pass in item which is a param in the addTodoHandler to forward it to the reducer
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
    // cause we're managing the todos overall state
    items: todoState.items,
    totalAmount: todoState.totalAmount,
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
  // this needs .Provider cause this component will PROVIDE any components that its wrapped around with the data/context that it needs with the TodoProvider component
  // the value is set to todoContext so that we can access the handlers
};

export default TodoProvider;
