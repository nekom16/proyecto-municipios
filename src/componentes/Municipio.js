import React, { useState, useEffect } from "react";
import GetMunicipios from "../logic/GetMunicipios";
import InstitucionSet from "./InstitucionSet";

export default function Municipio ({municipio}) {
    const estilos = {
        card: {
            fontSize: "12px",
            backgroundColor: "#fff",
            textAlign: "left",
            boxShadow: "-1px 0px 5px 0px rgba(0,0,0,0.75)",
            borderRadius: "5px",
            padding: "15px"
        },
        cardHeader: {
            fontSize: "14px",
            color: "#999",
            fontWeight: "bold",
            "&:hover": {
                background: "#efefef"
            },
        },
        content: {
            backgroundColor: "#ddd",
            color: "#8c8c8c",
            listStyleType: "circle"
        }
    }
    const [k, setK] = useState(false);

    return (
        <section style={ estilos.card } >
            <div style={ estilos.cardHeader } onClick={() => setK(!k)}>
                {municipio.nombre} - {municipio.dane} <br/>
                
            </div>
            <ul style={ estilos.content}>
                <InstitucionSet danemunicipio={municipio.dane} visible={k}/>
            </ul>
        </section>
    );
}