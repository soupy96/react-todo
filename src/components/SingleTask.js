import { Checkbox, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import { SingleTaskCSS, TaskIcons, EditForm } from './ReusableCss';
import { useContext, useState } from 'react';

import TodoContext from '../store/todo-context';

const SingleTask = (props) => {
  const [value, setValue] = useState(props.value);

  const todoCtx = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert('Please enter a valid todo task.');
      return;
    }
    todoCtx.saveTodo(props.numId, value);
  };

  return (
    <div>
      <SingleTaskCSS>
        {props.edit ? (
          <EditForm onSubmit={handleSubmit}>
            <TextField
              fullWidth
              focused
              id='outlined-basic'
              variant='standard'
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              style={{ marginBottom: 15, marginTop: 15 }}
            />
            <IconButton aria-label='edit' numid={props.numId} type='submit'>
              <SaveIcon aria-label='edit' numid={props.numId} />
            </IconButton>
          </EditForm>
        ) : !props.edit && props.complete ? (
          <p style={{ textDecorationLine: 'line-through' }}>{props.value}</p>
        ) : (
          <p>{props.value}</p>
        )}
        <TaskIcons>
          {props.complete ? (
            <Checkbox checked numid={props.numId} onChange={props.onChecked} />
          ) : (
            <Checkbox numid={props.numId} onChange={props.onChecked} />
          )}
          <IconButton
            aria-label='edit'
            numid={props.numId}
            onClick={props.onEdit}
          >
            <EditIcon />
          </IconButton>
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
