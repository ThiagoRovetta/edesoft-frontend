import { useSelector } from 'react-redux';
import { ImSpinner8 } from 'react-icons/im';

import { RootState } from '../../store/reducers/rootReducer';
import { Container, Overlay } from './styles';

export function Loading() {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  if (!isLoading) {
    return null;
  }

  return (
    <>
      <Overlay />
      <Container>
        <ImSpinner8 className="spinner" />
      </Container>
    </>
  );
}
