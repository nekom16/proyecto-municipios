import React, { useState, useEffect } from "react";
import GetMunicipios from "../logic/GetMunicipios";
import Institucion from "./Institucion";

export default function InstitucionSet ({danemunicipio, visible}) {
    const estilos = {
        click: {
            fontSize: "12px",
            color: "#4d4d4d",
            fontWeight: "bold",
        }
    } 

    let p = {
        option : 'instituciones', 
        code : danemunicipio 
    };
    const {data, isLoading, error} = GetMunicipios(p, visible);

    return (
        <>
            {
                visible ? ( 
                    data !== null && (
                        data.map((m, index) => 
                        <Institucion institucion={m} key={index} visible={visible}/>
                        )
                    )
                ) : (<div style={ estilos.click }>clickea el nombre para ver instituciones</div>)
            }
        </>
    );
}