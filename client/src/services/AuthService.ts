import { AxiosResponse } from 'axios';
import $api from '../http/todo';
import { AuthResponse } from '../modules/response/AuthResponse';

interface RegistrationResponse {
  message: string;
}

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', { email, password });
  }

  static async registration(email: string, password: string): Promise<AxiosResponse<RegistrationResponse>> {
    return $api.post<RegistrationResponse>('/registration', { email, password });
  }

  static async logout(): Promise<void> {
    return $api.post('/logout');
  }
}
