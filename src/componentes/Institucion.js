import React, { useState, useEffect } from "react";
import GetMunicipios from "../logic/GetMunicipios";
import SedesSet from "./SedesSet";

export default function Institucion ({institucion, visible}) {
    const [j, setJ] = useState(false);
    
    return (
        <>
            <li onClick={() => setJ(!j)}>
                { visible && <div>INSTITUCION - {institucion.nombre}</div> }
            </li>
            <ul>
                <SedesSet daneinstitucion={institucion.dane} visible={j}/>
            </ul>
        </>
    );
}