import React, { useEffect, useState } from 'react';
import { fetchNews } from '../utils/api';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews().then(data => setNews(data.articles));
  }, []);

  return (
    <div>
      <h3>最新新闻</h3>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
