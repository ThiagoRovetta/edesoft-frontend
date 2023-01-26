import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Table } from '../../components/Table';
import { RootState } from '../../store/reducers/rootReducer';
import { getAllUsersRequest } from '../../store/actions/usersActions';

export function ListUsers() {
  const { users, error } = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsersRequest());
  }, []);

  return (
    <>
      <Link to="/add_user">Home</Link>
      <Table users={users} />
    </>
  );
}
