import { Link } from 'react-router-dom';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Link to='/'>
        <h1>Usuários</h1>
      </Link>
    </Container>
  );
}
