// src/stores/NewsStore.ts
import { makeAutoObservable } from 'mobx';
import { fetchNews } from '../services/newsService';
import { NewsArticle } from '../types/news';

class NewsStore {
  articles: NewsArticle[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async loadNews() {
    this.loading = true;
    this.error = null;
    try {
      this.articles = await fetchNews();
    } catch (err) {
      this.error = 'Ошибка при загрузке новостей';
    } finally {
      this.loading = false;
    }
  }
}


export default new NewsStore();
