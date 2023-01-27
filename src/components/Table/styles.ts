import styled from 'styled-components';

export const Container = styled.table`
  margin-top: 2rem;

	color: gray;

	background: #fff;

  border-collapse: collapse;

  box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);

	th {
    color: #000;
		text-align: center;
		vertical-align: middle;

		border-top: 0px;
		border-bottom: 1px solid #dee2e6;

    padding: 1rem;

    text-transform: capitalize;
	}

	td {
		border-bottom: 1px solid #dee2e6;

    padding: 0.75rem;

		text-align: center;
		vertical-align: middle;
		font-weight: bold;
	}
`;

export const ActionsContainer = styled.div`
  display: flex;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 0.4rem 0.5rem;

    background: #7b68ee;
    color: #fff;

    font-size: 18px;
    font-weight: 600;
    line-height: 3rem;
    letter-spacing: 1px;

    border: 1px solid #7b68ee;
    border-radius: 5px;
    box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);

    transition: opacity 0.5;

    & + a {
      margin-left: 0.5rem;
    }

    &:hover {
      opacity: 0.9;
    }

    &:first-child {
      background: #17a2b8;
      border-color: #17a2b8;
    }

    &:nth-child(2) {
      background: #dc3545;
      border-color: #dc3545;
    }
  }
`;
