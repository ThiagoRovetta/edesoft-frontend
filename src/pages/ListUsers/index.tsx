import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Table } from '../../components/Table';
import { RootState } from '../../store/reducers/rootReducer';
import { getAllUsersRequest } from '../../store/actions/usersActions';
import { AddButtonContainer, Container } from './styles';

export function ListUsers() {
  const { users, error } = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsersRequest());
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Container>
      <AddButtonContainer>
        <Link to="/add_user">Adicionar usuário</Link>
      </AddButtonContainer>

      <Table users={users} />
    </Container>
  );
}
