import React, { useState, useEffect } from "react";
import GetMunicipios from "../logic/GetMunicipios";
import Sedes from "./Sedes";

export default function SedesSet ({daneinstitucion, visible}) {
    const estilos = {
        click: {
            fontSize: "12px",
            color: "#4d4d4d",
            fontWeight: "bold",
        }
    } 

    let p = {
        option : 'sedes', 
        code : daneinstitucion 
    };
    const {data, isLoading, error} = GetMunicipios(p, visible);

    return (
        <>
            {
                visible ? ( 
                    data !== null && (
                        data.map((m, index) => 
                        <Sedes sedes={m} key={index} visible={visible}/>
                        )
                    )
                ) : (<div style={ estilos.click }>clickea en el nombre para ver sedes</div>)
            }
        </>
    );
}
