import { Action, Middleware, MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit';

const errorMiddleware: Middleware = (store: MiddlewareAPI) => (next) => (action: Action) => {
  if (isRejectedWithValue(action)) {
    const error = action.error || 'Неизвестная ошибка';
    console.error('Ошибasaка:', error);
  }
  return next(action);
};

export default errorMiddleware;
