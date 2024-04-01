import React, { useState, useEffect } from "react";
import GetMunicipios from "../logic/GetMunicipios";
import Grupos from "./Grupos";

export default function GruposSet ({danesede, visible}) {
    const estilos = {
        click: {
            fontSize: "12px",
            color: "#4d4d4d",
            fontWeight: "bold",
        }
    } 

    let p = {
        option : 'grupos', 
        code : danesede 
    };
    const {data, isLoading, error} = GetMunicipios(p, visible);

    return (
        <>
            {
                visible ? ( 
                    data !== null && (
                        data.map((m, index) => 
                        <Grupos grupos={m} key={index} visible={visible}/>
                        )
                    )
                ) : (<div style={ estilos.click }>clickea en el nombre para ver grupos</div>)
            }
        </>
    );
}