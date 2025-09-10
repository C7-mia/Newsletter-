import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <img
        src={article.urlToImage || 'https://via.placeholder.com/300x200'}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-600 mb-2">{article.description}</p>
        <Link
          to={`/news/${article.title}`}
          className="text-blue-500 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
