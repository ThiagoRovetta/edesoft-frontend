import styled from 'styled-components';

export const Container = styled.header`
  height: 6rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #A6C7DA;

  -webkit-box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.59);
  -moz-box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.59);
  box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.59);

  a {
    text-decoration: none;

    &:visited {
      color: #fff;
    }
  }
`;
