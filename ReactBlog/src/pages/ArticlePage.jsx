import React from "react";
import articles from "./articles_content";

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.name === id);

  return (
    <>
      <h1> {article.title} </h1>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;
