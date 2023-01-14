import React, { useReducer } from 'react';

import TodoContext from './todo-context';

const defaultTodoState = {
  todos: [
    // { numId: 0, value: 'michael', complete: false },
    // { numId: 1, value: 'robyn', complete: false },
    // { numId: 2, value: 'reese', complete: false },
  ],
};

const todoReducer = (state, action) => {
  if (action.type === 'ADD_TODO') {
    const updatedTodos = state.todos.concat(action.todo);
    console.log('added todo');
    console.log(updatedTodos);
    return {
      todos: updatedTodos,
    };
  }
  if (action.type === 'CHECK_TODO') {
    console.log('checked todo');
    return {
      todos: state.todos,
    };
  }
  if (action.type === 'EDIT_TODO') {
    console.log('edit todo');
    return {
      todos: state.todos,
    };
  }
  if (action.type === 'DELETE_SINGLE_TODO') {
    let updatedTodos;
    updatedTodos = state.todos.filter((todo) => todo.numId !== action.numId);
    console.log('deleted todo');
    console.log(updatedTodos);
    return {
      todos: updatedTodos,
    };
  }
  if (action.type === 'DELETE_ALL_DONE_TODO') {
    console.log('delete all done todo');
    return {
      todos: state.todos,
    };
  }
  if (action.type === 'DELETE_ALL_TODO') {
    console.log('deleted all todos');
    console.log(state.todos);
    return {
      todos: [],
    };
  }
  return defaultTodoState;
};

const TodoProvider = (props) => {
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoState
  );

  const addTodoHandler = (todo) => {
    dispatchTodoAction({ type: 'ADD_TODO', todo: todo });
  };

  const checkTodoHandler = (numId) => {
    dispatchTodoAction({ type: 'CHECK_TODO', numId: numId });
  };

  const editTodoHandler = (numId) => {
    dispatchTodoAction({ type: 'EDIT_TODO', numId: numId });
  };

  const deleteSingleTodoHandler = (numId) => {
    dispatchTodoAction({ type: 'DELETE_SINGLE_TODO', numId: numId });
  };

  const deleteAllDoneTodoHandler = (numId) => {
    dispatchTodoAction({ type: 'DELETE_ALL_DONE_TODO', numId: numId });
  };

  const deleteAllTodoHandler = (numId) => {
    dispatchTodoAction({ type: 'DELETE_ALL_TODO', numId: numId });
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
