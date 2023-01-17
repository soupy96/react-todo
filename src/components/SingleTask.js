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
        {props.complete ? (
          <Checkbox checked numId={props.numId} onChange={props.onChecked} />
        ) : (
          <Checkbox numId={props.numId} onChange={props.onChecked} />
        )}
        <IconButton
          aria-label='edit'
          numId={props.numId}
          onClick={props.onEdit}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          aria-label='delete'
          numId={props.numId}
          onClick={props.onRemove}
        >
          <DeleteIcon />
        </IconButton>
      </TaskIcons>
    </SingleTaskCSS>
  );
};

export default SingleTask;
