import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { MainBox, SingleTask, TaskIcons } from './ReusableCss';

function TaskList() {
  return (
    <div>
      <MainBox>
        <h1 style={{ marginTop: 0 }}>Todo List</h1>
        <SingleTask>
          <p style={{ textDecorationLine: 'line-through' }}>learn react</p>
          <TaskIcons>
            <Checkbox defaultChecked />
            <IconButton aria-label='edit'>
              <EditIcon />
            </IconButton>
            <IconButton aria-label='delete'>
              <DeleteIcon />
            </IconButton>
          </TaskIcons>
        </SingleTask>
        <SingleTask>
          <p>learn react</p>
          <TaskIcons>
            <Checkbox />
            <IconButton aria-label='edit'>
              <EditIcon />
            </IconButton>
            <IconButton aria-label='delete'>
              <DeleteIcon />
            </IconButton>
          </TaskIcons>
        </SingleTask>
      </MainBox>
    </div>
  );
}

export default TaskList;
