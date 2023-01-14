import { Button } from '@mui/material';

const DeleteAllTasks = (props) => {
  return (
    <Button variant='contained' onClick={props.onDeleteAll}>
      Delete all tasks
    </Button>
  );
};

export default DeleteAllTasks;
