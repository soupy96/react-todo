import React from 'react';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import DeleteButts from './components/DeleteButts';
import TodoProvider from './store/TodoProvider';

const App = () => {
  return (
    <TodoProvider>
      <AddTask />
      <TaskList />
      <DeleteButts />
    </TodoProvider>
  );
};

export default App;
