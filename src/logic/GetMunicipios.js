import React, { useEffect, useState } from "react";

export default function GetMunicipios (p, activar = true) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = 'https://www.php.engenius.com.co/DatabaseIE.php';
    let option = 'municipios';

    let municipios = {
        "User": "etraining",
        "Password": "explorandoando2020%",
        "option": option
    };

    if( typeof p !== 'undefined' ) {
        municipios.option = p.option;
        if( p.option === 'instituciones' ){
            municipios.CodMun = p.code;
        } else if ( p.option === 'sedes' ) {
            municipios.CodInst = p.code;
        } else if ( p.option === 'grupos') {
            municipios.CodSede = p.code;
        }
    }

    const requestOptions = {
        method: 'POST',
        headers: { 
            Accept : 'application/json',
            'Content-Type' : 'application/json'
        },
        dataType : 'json',
        body: JSON.stringify(municipios)
    };

    useEffect(() => {
        if( activar ) {
        fetch(url, requestOptions)
            .then(response => 
                response.json()
            )
            .then(data => {
                setData(data.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
        }
    }, [activar]);
    

    return { data, loading, error };
}

