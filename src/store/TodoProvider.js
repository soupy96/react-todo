import React, { useReducer } from 'react';

import TodoContext from './todo-context';

const defaultTodoState = {
  todos: [
    // { numId: 0, value: 'michael', complete: false, edit: false },
    // { numId: 1, value: 'robyn', complete: true, edit: false },
    // { numId: 2, value: 'reese', complete: true, edit: false },
  ],
};

const todoReducer = (state, action) => {
  if (action.type === 'ADD_TODO') {
    const updatedTodos = [...state.todos];
    // this line below adds to the beginning of the todos array
    updatedTodos.unshift(action.todo);
    return {
      todos: updatedTodos,
    };
  }
  if (action.type === 'CHECK_TODO') {
    const updatedTodos = [...state.todos];
    updatedTodos.forEach((todo) => {
      if (todo.numId === action.numId) {
        todo.complete = !todo.complete;
      }
    });
    return {
      todos: updatedTodos,
    };
  }
  if (action.type === 'EDIT_TODO') {
    const updatedTodos = [...state.todos];
    updatedTodos.forEach((todo) => {
      if (todo.numId === action.todo.numId) {
        todo.edit = !todo.edit;
      }
    });
    return {
      todos: updatedTodos,
    };
  }
  if (action.type === 'SAVE_TODO') {
    const updatedTodos = [...state.todos];
    updatedTodos.forEach((todo) => {
      if (todo.numId === action.numId) {
        todo.edit = !todo.edit;
        todo.value = action.value;
      }
    });
    return {
      todos: updatedTodos,
    };
  }
  if (action.type === 'DELETE_SINGLE_TODO') {
    let updatedTodos = [...state.todos];
    updatedTodos = updatedTodos.filter((todo) => todo.numId !== action.numId);
    return {
      todos: updatedTodos,
    };
  }
  if (action.type === 'DELETE_ALL_DONE_TODO') {
    let updatedTodos = [...state.todos];
    updatedTodos = updatedTodos.filter((todo) => !todo.complete);
    return {
      todos: updatedTodos,
    };
  }
  if (action.type === 'DELETE_ALL_TODO') {
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

  const editTodoHandler = (todo) => {
    dispatchTodoAction({ type: 'EDIT_TODO', todo: todo });
  };

  const saveTodoHandler = (numId, value) => {
    dispatchTodoAction({ type: 'SAVE_TODO', numId: numId, value: value });
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
    saveTodo: saveTodoHandler,
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
