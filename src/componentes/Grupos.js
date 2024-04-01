import React, { useState, useEffect } from "react";
import GetMunicipios from "../logic/GetMunicipios";

export default function Grupos ({grupos, visible}) {
    
    return (
        <li>
            { visible && <div>GRUPO - {grupos.nombre}</div> }
        </li>
    );
}