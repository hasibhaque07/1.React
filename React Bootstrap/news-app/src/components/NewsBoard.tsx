import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
type NewsBoardProp = {
  category: string;
};
const NewsBoard: React.FC<NewsBoardProp> = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9480ffc09d0e4a698dd25c21f7217a87`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  //console.log(articles);
  return (
    <>
      <h2 className="text-center my-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {articles &&
        articles.map((news, index) => <NewsItem key={index} news={news} />)}
    </>
  );
};

export default NewsBoard;
