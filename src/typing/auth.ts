export type GenderType = 'Male' | 'Female';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  birthday: Date;
  gender: GenderType;
  email: string;
  phone?: string;
  address?: string;
  intro?: string;
  avatar?: string;
  lastLogin?: Date;
  roleId?: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  accessToken: string;
  sucess: boolean;
  message: string;
  result: User;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface SignUpParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  gender: GenderType;
}

export interface LogoutParam {
  token: string;
}
