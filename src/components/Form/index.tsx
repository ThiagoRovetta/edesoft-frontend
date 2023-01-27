import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, FormHandles } from '@unform/core';

import { ActionsContainer, Container, FormGroup, FormInputs } from './styles';
import { Input } from '../Input';
import { createUserRequest } from '../../store/actions/usersActions';

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

export function Form() {
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log('formRef', formRef);
    console.log('data', data);

    dispatch(createUserRequest(data));

    navigate('/');
  };

  function handleClick() {
    navigate('/');
  }

  return (
    <Container ref={formRef} onSubmit={handleSubmit}>
      <FormInputs>
        <FormGroup>
          <Input name="username" label="Username" type="text" />
        </FormGroup>
        <FormGroup>
          <Input name="email" label="Email" type="email" />
        </FormGroup>
        <FormGroup>
          <Input name="password" label="Password" type="text" />
        </FormGroup>
        <FormGroup>
          <Input name="name.firstname" label="Firstname" type="text" />
        </FormGroup>
        <FormGroup>
          <Input name="name.lastname" label="Lastname" type="text" />
        </FormGroup>
        <FormGroup>
          <Input name="address.city" label="City" type="text" />
        </FormGroup>
        <FormGroup>
          <Input name="address.street" label="Street" type="text" />
        </FormGroup>
        <FormGroup>
          <Input name="address.number" label="Number" type="number" />
        </FormGroup>
        <FormGroup>
          <Input name="address.zipcode" label="Zipcode" type="text" />
        </FormGroup>
        <FormGroup>
          <Input name="address.geolocation.lat" label="Latitude" type="text" />
        </FormGroup>
        <FormGroup>
          <Input name="address.geolocation.long" label="Longitude" type="text" />
        </FormGroup>
        <FormGroup>
          <Input name="phone" label="Phone" type="text" />
        </FormGroup>
      </FormInputs>
      <hr style={{ marginTop: '2rem' }} />
      <ActionsContainer>
        <button type="submit">SUBMIT</button>
        <button type="button" onClick={handleClick}>CANCEL</button>
      </ActionsContainer>
    </Container>
  );
}
