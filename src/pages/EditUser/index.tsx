import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { Form } from '../../components/Form';
import { getOneUserRequest, getOneUserSuccess } from '../../store/actions/usersActions';
import { RootState } from '../../store/reducers/rootReducer';
import { User } from '../../types';
import { Container } from './styles';

export function EditUser() {
  const location = useLocation();
  const { id } = useParams();

  const { currentUser, error } = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    const tempUser: User | undefined = location.state?.user;

    if (!tempUser) {
      dispatch(getOneUserRequest({
        id: Number(id)
      }));
    } else {
      dispatch(getOneUserSuccess({ user: tempUser }));
    }

  }, []);

  if (currentUser === null) {
    return null;
  }

  return (
    <Container>
      <Form mode='edit' user={currentUser} />
    </Container>
  );
}
