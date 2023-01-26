import { api } from './api';
import { User } from '../types';

export const getAllUsers = () => api.get<User[]>('/users');

export const getOneUser = (id: number) => api.get(`/users/${id}`);
