import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import DeleteButts from '../components/DeleteButts';

function MainApp() {
  return (
    <div>
      <AddTask />
      <TaskList />
      <DeleteButts />
    </div>
  );
}

export default MainApp;
