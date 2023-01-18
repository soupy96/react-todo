import styled from 'styled-components';

export const MainBox = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  padding: 15px;
  background-color: #ffffff;
  margin-bottom: 50px;
  width: 500px;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const WhiteH1 = styled.h1`
  color: #ffffff;
`;

export const SingleTaskCSS = styled.div`
  border: 2px solid grey;
  border-radius: 15px;
  padding: 0px 10px 0px 10px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const EditForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteButtBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 600px) {
    height: 100px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
