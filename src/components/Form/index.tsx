import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';

import { ActionsContainer, Container, FormGroup, FormInputs } from './styles';
import { Input } from '../Input';
import { createUserRequest, updateUserRequest } from '../../store/actions/usersActions';
import { User } from '../../types';

interface FormData {
  username: string;
  email: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  }
  phone: string;
}

interface FormProps {
  mode: 'add' | 'edit' | 'delete';
  user?: User;
}

export function Form({ mode, user = undefined }: FormProps) {
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmitAddMode: SubmitHandler<FormData> = data => {
    dispatch(createUserRequest(data));

    navigate('/');
  };

  const handleSubmitEditMode: SubmitHandler<FormData> = data => {
    dispatch(updateUserRequest({
      id: user!.id,
      data
    }));

    navigate('/');
  };

  const handleSubmitDeleteMode: SubmitHandler<FormData> = data => {
    console.log('formRef', formRef);
    console.log('data', data);

    dispatch(createUserRequest(data));

    navigate('/');
  };

  function handleClick() {
    navigate('/');
  }

  useEffect(() => {
    if (mode !== 'add') {
      const initialData = {
        username: user?.username,
        email: user?.email,
        password: user?.password,
        name: {
          firstname: user?.name.firstname,
          lastname: user?.name.lastname
        },
        address: {
          city: user?.address.city,
          street: user?.address.street,
          number: user?.address.number,
          zipcode: user?.address.zipcode,
          geolocation: {
            lat: user?.address.geolocation.lat,
            long: user?.address.geolocation.long,
          },
        },
        phone: user?.phone
      };

      formRef?.current?.setData(initialData);
    }
  }, [mode, user]);

  return (
    <Container ref={formRef} onSubmit={mode === 'add' ? handleSubmitAddMode : mode === 'edit' ? handleSubmitEditMode : handleSubmitDeleteMode}>
      <FormInputs>
        <FormGroup>
          <Input name="username" label="Username" type="text" disabled={mode === 'delete'} />
        </FormGroup>
        <FormGroup>
          <Input name="email" label="Email" type="email" disabled={mode === 'delete'} />
        </FormGroup>
        <FormGroup>
          <Input name="password" label="Password" type="text" disabled={mode === 'delete'} />
        </FormGroup>
        <FormGroup>
          <Input name="name.firstname" label="Firstname" type="text" disabled={mode === 'delete'} />
        </FormGroup>
        <FormGroup>
          <Input name="name.lastname" label="Lastname" type="text" disabled={mode === 'delete'} />
        </FormGroup>
        <FormGroup>
          <Input name="address.city" label="City" type="text" disabled={mode === 'delete'} />
        </FormGroup>
        <FormGroup>
          <Input name="address.street" label="Street" type="text" disabled={mode === 'delete'} />
        </FormGroup>
        <FormGroup>
          <Input name="address.number" label="Number" type="number" disabled={mode === 'delete'} />
        </FormGroup>
        <FormGroup>
          <Input name="address.zipcode" label="Zipcode" type="text" disabled={mode === 'delete'} />
        </FormGroup>
        <FormGroup>
          <Input name="address.geolocation.lat" label="Latitude" type="text" disabled={mode === 'delete'} />
        </FormGroup>
        <FormGroup>
          <Input name="address.geolocation.long" label="Longitude" type="text" disabled={mode === 'delete'} />
        </FormGroup>
        <FormGroup>
          <Input name="phone" label="Phone" type="text" disabled={mode === 'delete'} />
        </FormGroup>
      </FormInputs>
      <hr style={{ marginTop: '2rem' }} />
      <ActionsContainer>
        <button type="submit">
          {
            mode === 'add' ? 'Cadastrar' : mode === 'edit' ? 'Editar' : 'Excluir'
          }
        </button>
        <button type="button" onClick={handleClick}>Cancelar</button>
      </ActionsContainer>
    </Container>
  );
}
