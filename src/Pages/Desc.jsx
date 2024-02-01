import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Desc = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const fetchData = async () => {
    try {
      let url = `https://api.tvmaze.com/shows/${id}`;
      let data = await fetch(url);
      let parseData = await data.json();
      setShow(parseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src={
              !show.image
                ? "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725040-stock-illustration-image-available-icon-flat-vector.jpg"
                : show.image.original
                ? show.image.original
                : "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725040-stock-illustration-image-available-icon-flat-vector.jpg"
            }
            className="card-img-top"
            alt={show.name}
          />

          <div className="card-body">
            <h5 className="card-title">{show.name}</h5>
            <p className="card-text">{show.summary}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desc;
