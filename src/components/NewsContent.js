import React from "react";

const NewsContent = ({ newsData, loadmore, setLoadMore, totalNewsResult }) => {
  // console.log(newsData);
  return (

    <>
      <section>
        {newsData.map((cVal) => {
          return (
            <div className="news_container" key={cVal.title}>
              <div className="col1">
                <div className="imgbox">
                  <img
                    src={cVal.urlToImage ? cVal.urlToImage : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}
                    alt={cVal.title}
                  />
                </div>
              </div>
              <div className="col2">
                <h2>{cVal.title}</h2>
                <span>
                  <b>short</b> by {cVal.author} / {cVal.publishedAt}
                </span>
                <p>{cVal.description}</p>
                <span>read more at</span>{" "}
                <a href={cVal.url}>
                  <b>Twitter</b>
                </a>
              </div>
            </div>
          );
        })}

      </section>


      {
        loadmore <= totalNewsResult && (
          <div className="button">
            <button className="load_btn" onClick={() => setLoadMore(loadmore + 20)}>
              Load More
            </button>
          </div>
        )
      }


    </>
  );
};

export default NewsContent;
