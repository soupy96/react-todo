import { Button } from '@mui/material';

const DeleteDoneTasks = (props) => {
  return (
    <Button variant='contained' onClick={props.onDeleteAllDone}>
      Delete done tasks
    </Button>
  );
};

export default DeleteDoneTasks;
