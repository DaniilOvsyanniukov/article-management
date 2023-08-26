import React, { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';

interface IArticle {
  _id: string;
  title: string;
  link: string;
  pubDate: Date;
}

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getArticles();
      setArticles(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {articles.map((article: IArticle) => (
        <div key={article._id} className="article-card">
          <h2>{article.title}</h2>
          <a href={article.link}>Read more</a>
          <p>Published on: {new Date(article.pubDate).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
