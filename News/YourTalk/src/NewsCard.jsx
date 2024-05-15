import React from "react";

const NewsCard = (props) => {
  const { author, urlToImage, title, content ,url} = props.resData;

  return (
    <div className="news-card">
      <img src={urlToImage} alt="news-web" />
      <p className="title">{title}</p>
      <p className="author">Author: {author}</p>
      <p className="content">{content.substring(0,50)}...<a href={url} target="blank">more</a></p>
    </div>
  );
};

export default NewsCard;
