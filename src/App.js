import React, {useState, useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import Caja from "./components/Caja.js";

function App() {
  const [frasesSimpsons, setFrasesSimpsons] = useState({});

  const consutarAPI = async () =>{
    const api =await fetch("https://thesimpsonsquoteapi.glitch.me/quotes",{
      mode: "cors", //para que el servidor no detecte muchas conexiones y cierre la conexion
    });
    const respuesta = await api.json();
    console.log(api);
    console.log(respuesta[0]);
    setFrasesSimpsons(respuesta[0]);
  }

  useEffect(()=>{
    consutarAPI();
  },[])

  return (
    <section className="container my-5">
      <article className="d-flex flex-column align-items-center">
        <img src={logo} alt="logo de los simpsons" className="w-75 my-4"></img>
        <button className="btn btn-warning my-4 w-50 shadow" onClick={()=> consutarAPI()}>Obtener Frase</button>
      </article>
      <Caja frasesSimpsons = {frasesSimpsons}></Caja>
    </section>
  );
}

export default App;
