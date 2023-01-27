import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled(Unform)`
  margin-top: 2rem;

  padding: 2rem;

  width: 80%;
  min-height: 20rem;

	background: #fff;

  border-radius: 10px;

  box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);
`;

export const FormInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.2rem;
  }

  input {
    margin-top: 0.5rem;

    min-height: 2rem;

    border-radius: 5px;
    border: 2px solid purple;

    font-size: 1.2rem;

    padding: 0.5rem;
  }
`;

export const ActionsContainer = styled.div`
  margin-top: 2rem;

  display: flex;

  button {
    font-size: 1rem;

    padding: 0.5rem 1rem;

    border-radius: 5px;


    & + button {
      margin-left: 1rem;
    }

    &:first-child {
      background: purple;
      color: #fff;
    }
  }
`;
