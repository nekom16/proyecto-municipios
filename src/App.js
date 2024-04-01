import React, { useState, useEffect } from "react";
import GetMunicipios from "./logic/GetMunicipios";
import './App.css';
import Municipio from "./componentes/Municipio";

function App() {
  const [k, setK] = useState([]);
  const municipios = GetMunicipios();

  return (
    <>
      <div className="App">
        {
          municipios.data === null ? (<h2>no hay disponibles</h2>) : (
            municipios.data.map((m, index) => 
              <Municipio municipio={m} key={index}/>
            )
          )
        }
      </div>
    </>
  );

}

export default App;
