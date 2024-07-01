import axios from 'axios';
import { AuthResponse } from '../modules/response/AuthResponse';

export const API_URL = `http://localhost:8080/api`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    //originalRequest нужна чтобы не циклило 401 , а так этот кусок отрабатывает при окончании действия access и выдает новый ,если refresh ещё живой

    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config.isRetry) {
      originalRequest.isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token', response.data.accessToken);
        return $api.request(originalRequest);
      } catch (error) {
        console.log('Не авторизован');
      }
    }
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    // Для ошибки 401 просто логируем и возвращаем неразрешенный промис
    console.log('Не авторизован');
    return Promise.reject(error);
    // throw error
  },
);

export default $api;
