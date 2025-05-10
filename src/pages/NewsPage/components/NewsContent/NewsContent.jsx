import { useEffect } from 'react';
import styles from './styles.module.scss';
import { observer } from 'mobx-react';
import newsStore from '../../../../stores/NewsStore';

const NewsContent = () => {
    useEffect(() => {
        newsStore.loadNews();
      }, []);
    
      if (newsStore.loading) return <div>Загрузка...</div>;
      if (newsStore.error) return <div>{newsStore.error}</div>;
      if (!Array.isArray(newsStore.articles)) return <div>Нет данных</div>;

      return (
        <div>
            
          <h1>Новости</h1>
          <ul>
            {newsStore.articles.map(article => (
              <li key={article.id}>
                <h2>{article.name}</h2>
                <p>{article.company}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default observer(NewsContent);