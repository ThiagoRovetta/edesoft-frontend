import { api } from './api';
import { User } from '../types';

export const getAllUsers = () => api.get<User[]>('/users');

export const getOneUser = (id: number) => api.get(`/users/${id}`);

export const addUser = (params: any) => api.post('/users', { ...params });

export const editUser = (id: number, params: any)  => api.put(`/users/${id}`, { ...params });

export const deleteUser = (id: number) => api.delete(`/users/${id}`);
