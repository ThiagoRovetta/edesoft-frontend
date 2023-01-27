import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 0 1rem;

  overflow: hidden;
`;

export const AddButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 0 1rem;

    background: #7b68ee;
    color: #fff;

    font-size: 18px;
    font-weight: 600;
    line-height: 3rem;
    letter-spacing: 1px;

    border: 1px solid #7b68ee;
    border-radius: 10px;
    box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);

    transition: opacity 0.5;

    &:hover {
      opacity: 0.9;
    }
  }
`;
