import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { SingleTaskCSS, TaskIcons } from './ReusableCss';

const SingleTask = (props) => {
  return (
    <SingleTaskCSS>
      {props.complete ? (
        <p style={{ textDecorationLine: 'line-through' }}>{props.name}</p>
      ) : (
        <p>{props.name}</p>
      )}

      <TaskIcons>
        {props.complete ? <Checkbox defaultChecked /> : <Checkbox />}
        <IconButton aria-label='edit'>
          <EditIcon />
        </IconButton>
        <IconButton aria-label='delete'>
          <DeleteIcon />
        </IconButton>
      </TaskIcons>
    </SingleTaskCSS>
  );
};

export default SingleTask;
