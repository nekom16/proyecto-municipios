import React, { useState, useEffect } from "react";
import GetMunicipios from "../logic/GetMunicipios";
import GruposSet from "./GruposSet";

export default function Sedes ({sedes, visible}) {
    const [l, setL] = useState(false);
    
    return (
        <>
            <li onClick={() => setL(!l)}>
                { visible && <div>SEDE - {sedes.nombre}</div> }
            </li>
            <ul>
                <GruposSet danesede={sedes.dane} visible={l}/>
            </ul>
        </>
    );
}