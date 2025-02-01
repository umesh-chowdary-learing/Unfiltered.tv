import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
      <p className="text-gray-700">{article.content}</p>
    </div>
  );
};

export default NewsCard;
