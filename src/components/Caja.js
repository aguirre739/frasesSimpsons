import React from "react";

const Caja = (props) => {
  return (
    <article className="row my-5 shadow p-3 mb-5 bg-white rounded">
      <div className="col-md-3 p-3">
        <img src={props.frasesSimpsons.image} alt="personaje" className="w-75"></img>
      </div>
      <div className="col-md-9 p-2 d-flex flex-column justify-content-center align-items-center">
        <p className="h5">{props.frasesSimpsons.character}</p>
        <p className="lead">{props.frasesSimpsons.quote}</p>
      </div>
    </article>
  );
};

export default Caja;
