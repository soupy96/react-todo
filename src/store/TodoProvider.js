import React, { useReducer } from 'react';

import TodoContext from './todo-context';

const defaultTodoState = {
  todos: [
    { numId: 0, value: 'michael', complete: false, edit: false, editValue: '' },
    { numId: 1, value: 'robyn', complete: true, edit: false, editValue: '' },
    { numId: 2, value: 'reese', complete: true, edit: false, editValue: '' },
  ],
};

const todoReducer = (state, action) => {
  if (action.type === 'ADD_TODO') {
    console.log('added todo');
    const updatedTodos = [...state.todos];
    // this line below adds to the beginning of the todos array
    updatedTodos.unshift(action.todo);
    console.log(updatedTodos);
    return {
      todos: updatedTodos,
    };
  }
  if (action.type === 'CHECK_TODO') {
    console.log('checked todo');
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
    console.log('edit todo');
    const updatedTodos = [...state.todos];
    updatedTodos.forEach((todo) => {
      if (todo.numId === action.numId) {
        // if (todo.edit === true) {
        //   todo.edit = !todo.edit;
        //   todo.value = action.value;
        // } else {
        todo.edit = !todo.edit;
        // }
      }
    });
    return {
      todos: updatedTodos,
    };
  }
  if (action.type === 'SAVE_TODO') {
    console.log('saved todo');
    const updatedTodos = [...state.todos];
    updatedTodos.forEach((todo) => {
      if (todo.numId === action.numId) {
        // if (todo.edit === true) {
        //   todo.edit = !todo.edit;
        //   todo.value = action.value;
        // } else {
        todo.edit = !todo.edit;
        // }
      }
    });
    return {
      todos: updatedTodos,
    };
  }
  if (action.type === 'DELETE_SINGLE_TODO') {
    console.log('deleted todo');
    let updatedTodos = [...state.todos];
    updatedTodos = updatedTodos.filter((todo) => todo.numId !== action.numId);
    return {
      todos: updatedTodos,
    };
  }
  if (action.type === 'DELETE_ALL_DONE_TODO') {
    console.log('delete all done todo');
    let updatedTodos = [...state.todos];
    updatedTodos = updatedTodos.filter((todo) => !todo.complete);
    return {
      todos: updatedTodos,
    };
  }
  if (action.type === 'DELETE_ALL_TODO') {
    console.log('deleted all todos');
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

  const saveTodoHandler = (editValue) => {
    dispatchTodoAction({ type: 'SAVE_TODO', editValue: editValue });
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
