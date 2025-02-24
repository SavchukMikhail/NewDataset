
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com/products?limit=10&skip=10&select=title,price',
  timeout: 10000,
});

// Обработка ошибок
api.interceptors.response.use(
  response => response,
  error => {
    // Обработка ошибок здесь
    return Promise.reject(error);
  }
);

export default api;
