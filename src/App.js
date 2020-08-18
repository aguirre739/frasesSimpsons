import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import Caja from "./components/Caja.js";
import Spinner from "./components/Spinner.js";

function App() {
  const [frasesSimpsons, setFrasesSimpsons] = useState({});
  const [loader, setloader] = useState(false);

  const consutarAPI = async () => {
    setloader(true);
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes", {
      mode: "cors", //para que el servidor no detecte muchas conexiones y cierre la conexion
    });
    const respuesta = await api.json();
    console.log(api);
    console.log(respuesta[0]);
    setTimeout(() => {
      setFrasesSimpsons(respuesta[0]);
      setloader(false);
    }, 2000);
  };

  useEffect(() => {
    consutarAPI();
  }, []);

  const cargarComponente = loader ? (
    <Spinner></Spinner>
  ) : (
    <Caja frasesSimpsons={frasesSimpsons}></Caja>
  );

  return (
    <section className="container my-5">
      <article className="d-flex flex-column align-items-center">
        <img src={logo} alt="logo de los simpsons" className="w-75 my-4"></img>
        <button
          className="btn btn-warning my-4 w-50 shadow"
          onClick={() => consutarAPI()}
        >
          Obtener Frase
        </button>
      </article>
      {cargarComponente}
    </section>
  );
}

export default App;
