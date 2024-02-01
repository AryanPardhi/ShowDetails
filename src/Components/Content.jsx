import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Desc from "../Pages/Desc";

const Content = () => {
  const [articles, setArticles] = useState([]);
  const fetchData = async () => {
    try {
      let url = `https://api.tvmaze.com/search/shows?q=all`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      setArticles(parseData.map(item => item.show));

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {
          articles.map((elem, index) => {
            console.log(elem);
            return (
              <div className="card m-2" style={{ width: "18rem" }} key={index}>
                <img
                  src={
                    !elem.image 
                      ? "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725040-stock-illustration-image-available-icon-flat-vector.jpg"
                      : (elem.image.original ? elem.image.original : "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725040-stock-illustration-image-available-icon-flat-vector.jpg") 
                  }
                  className="card-img-top"
                  alt={elem.name}
                />

                <div className="card-body">
                  <h5 className="card-title">{elem.name}</h5>
                  <p className="card-text">
                    {elem.type}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      BY - {elem.language}
                    </small>
                  </p>
                  <button className="btn btn-link btn-sm ">
                    <Link
                      to={`/Desc/${elem.id}`}
                    >
                      Read More
                    </Link>
                  </button>
                </div>
              </div>
            )
          })}
      </div>
    </>
  );
};

export default Content;
