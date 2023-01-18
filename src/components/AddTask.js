import { useContext, useState } from 'react';

import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import TodoContext from '../store/todo-context';

import { MainBox, WhiteH1 } from './ReusableCss';

const AddTask = () => {
  const [value, setValue] = useState('');
  const [todoId, setId] = useState(0);

  const todoCtx = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    let numId = todoId;
    todoCtx.addTodo({
      numId: numId,
      value,
      complete: false,
      edit: false,
      editValue: '',
    });
    numId++;
    setId(numId);
    setValue('');
  };

  return (
    <div>
      <WhiteH1>Todo App</WhiteH1>
      <MainBox>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Add Todo'
            variant='outlined'
            style={{ marginBottom: 15 }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button fullWidth variant='contained' type='submit'>
            Add New Task
          </Button>
        </form>
      </MainBox>
    </div>
  );
};

export default AddTask;
