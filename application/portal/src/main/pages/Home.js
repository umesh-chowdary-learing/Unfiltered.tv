import React, { useEffect } from "react";
import useNewsStore from "../../store/newsStore";
import NewsCard from "../componets/NewsCard";

const Home = () => {
  const { articles, setArticles } = useNewsStore();

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch("http://localhost:3000/news-updates");
      const data = await response.json();
      setArticles(data);
    };
    fetchNews();
  }, [setArticles]);

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold text-center mb-6">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
