import styled from 'styled-components';
import Button from '@mui/material/Button';

const DeleteButts = () => {
  return (
    <DeleteButtBox>
      <Button variant='contained'>Delete done tasks</Button>
      <Button variant='contained'>Delete all tasks</Button>
    </DeleteButtBox>
  );
};

const DeleteButtBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default DeleteButts;
