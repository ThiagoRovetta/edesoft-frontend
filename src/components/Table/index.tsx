import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { User } from '../../types';
import { ActionsContainer, Container } from './styles';

interface TableProps {
  users: User[]
}

const tableColumns = [
  'email',
  'firstname',
  'lastname',
  'city',
  'street',
  'number',
  'zipcode',
  'lat',
  'long',
  'phone',
  'actions'
];

export function Table({ users }: TableProps) {
  return (
    <Container>
      <thead>
        <tr>
          {tableColumns.map(column => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.email}</td>
            <td>{user.name.firstname}</td>
            <td>{user.name.lastname}</td>
            <td>{user.address.city}</td>
            <td>{user.address.street}</td>
            <td>{user.address.number}</td>
            <td>{user.address.zipcode}</td>
            <td>{user.address.geolocation.lat}</td>
            <td>{user.address.geolocation.long}</td>
            <td>{user.phone}</td>
            <td>
              <ActionsContainer>
                <Link to="/edit_user">
                  <BiEdit />
                </Link>
                <Link to="/delete_user">
                  <MdDeleteOutline />
                </Link>
              </ActionsContainer>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}
