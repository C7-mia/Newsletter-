import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">{id}</h1>
      <p>Detailed news content will be displayed here.</p>
    </div>
  );
};

export default NewsDetail;
