import { api } from './api';
import { User } from '../types';

export const getAllUsers = () => api.get<User[]>('/users');

export const getOneUser = (id: number) => api.get<User>(`/users/${id}`);

export const addUser = (params: Omit<User, 'id'>) => api.post<User>('/users', { ...params });

export const editUser = (id: number, params: Omit<User, 'id'>)  => api.put<User>(`/users/${id}`, { ...params });

export const deleteUser = (id: number) => api.delete<User>(`/users/${id}`);
