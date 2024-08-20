import { AxiosResponse } from 'axios';
import $api from '../http/todo';
import { AuthResponse } from '../modules/response/AuthResponse';
import { Post } from '../modules/IPost';

interface RegistrationResponse {
  message: string;
}



export default class PostService {
  static async addPost<T>(
    title: string,
    desc: string,
    status: boolean,
    author: string,
  ): Promise<AxiosResponse<T>> {
    return $api.post<T>('/addPost', {
      title,
      desc,
      status,
      author,
    });
  }

  static async remPost(_id: string): Promise<AxiosResponse<RegistrationResponse>> {
    return $api.post<RegistrationResponse>('/remPost', { _id });
  }

  static async getPosts(): Promise<AxiosResponse<Post[]>> {
    return $api.get<Post[]>('/getPosts');
  }
  
  static async updatePost<T>(_id: string): Promise<AxiosResponse<T>> {
    return $api.post<T>('/updatePost', { _id });
  }
}
