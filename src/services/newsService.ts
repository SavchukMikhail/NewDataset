
import api from './api';
import { NewsArticle } from '../types/news';

export const fetchNews = async (): Promise<NewsArticle[]> => {
  try {
    const response = await api.get<{ data: NewsArticle[] }>('/news');
    return Array.isArray(response.data.data) ? response.data.data : [];
  } catch (error) {
    console.error('Ошибка при загрузке новостей:', error);
    return [];
  }
};
