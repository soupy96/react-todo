import { Checkbox, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import { SingleTaskCSS, TaskIcons } from './ReusableCss';
// import { useState } from 'react';

const SingleTask = (props) => {
  // const [editValue, setEditValue] = useState(props.name);

  return (
    <div>
      <SingleTaskCSS>
        {props.edit ? (
          <TextField
            fullWidth
            id='outlined-basic'
            variant='standard'
            style={{ marginBottom: 15 }}
            // value={props.name}
            // value={props.editValue}
            onChange={(e) => {
              props.editValue = e.target.value;
            }}
          />
        ) : !props.edit && props.complete ? (
          <p style={{ textDecorationLine: 'line-through' }}>{props.name}</p>
        ) : (
          <p>{props.name}</p>
        )}
        <TaskIcons>
          {props.complete ? (
            <Checkbox checked numid={props.numId} onChange={props.onChecked} />
          ) : (
            <Checkbox numid={props.numId} onChange={props.onChecked} />
          )}
          {props.edit ? (
            <IconButton aria-label='edit' numid={props.numId}>
              <SaveIcon
                aria-label='edit'
                numid={props.numId}
                onClick={props.onSave}
              />
            </IconButton>
          ) : (
            <IconButton
              aria-label='edit'
              numid={props.numId}
              onClick={props.onEdit}
            >
              <EditIcon />
            </IconButton>
          )}
          <IconButton
            aria-label='delete'
            numid={props.numId}
            onClick={props.onRemove}
          >
            <DeleteIcon />
          </IconButton>
        </TaskIcons>
      </SingleTaskCSS>
    </div>
  );
};

export default SingleTask;
