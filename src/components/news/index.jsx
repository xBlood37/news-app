import React from "react";

function News({ items }) {
  return (
    <main className="main">
      <h1 className="main-title">All news</h1>
      {items.map((obj, i) => {
        return (
          <a key={i} className="news-card" href={obj.url}>
            <div className="news-card__inner">
              <h2 className="news-card__title">{obj.title}</h2>
              <span className="line"></span>
              <p className="news-card__text">{obj.description}</p>
              <span className="news-card__date">{obj.publishedAt}</span>
              <img
                className="news-card__img"
                alt="news images"
                src={obj.urlToImage}
              />
            </div>
          </a>
        );
      })}
    </main>
  );
}

export default News;
