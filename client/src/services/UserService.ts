import { AxiosResponse } from 'axios';
import { IUser } from '../modules/response/IUser';
import $api from '../http/todo';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('/users');
  }
}
 