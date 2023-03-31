import axios from "axios";
import React, { useEffect,useState } from "react";

export const ComponenteEstado = () => {

    const [puntos, setPuntos] = useState(0);

    useEffect(async () => {
        await obtenerUsuario();
    }, []);

    const obtenerUsuario = () => {
        return axios.get('https://randomuser.me/api').then((response) => {
            if(response.status === 200){
                alert(JSON.stringify(response.data))
            } else {
                throw new Error('Error al obtener el usuario alaeatorio')
            }
        }).catch((e) => console.error(`[Error]: ${e}`))
    }

    const sumarPuntos = () => {
        setPuntos (puntos + 1)
    }
    
    return (
        <div>
                <h2>
                puntacion: { puntos }
                </h2>
                <button onClick={sumarPuntos}>
                    Sumar puntos
                </button>
        </div>
    )

}
