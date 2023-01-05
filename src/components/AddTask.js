import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

import { MainBox, WhiteH1 } from './ReusableCss';

function AddTask() {
  // TODO: add form validation
  return (
    <div>
      <WhiteH1>Todo App</WhiteH1>
      <MainBox>
        <TextField
          fullWidth
          id='outlined-basic'
          label='Add Todo'
          variant='outlined'
          style={{ marginBottom: 15 }}
        />
        <Button fullWidth variant='contained'>
          Add New Task
        </Button>
      </MainBox>
    </div>
  );
}

export default AddTask;
