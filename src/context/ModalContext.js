import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //state del provider
const [ id_receta, setIdReceta ] = useState(null);
const [ receta_data, setReceta ] = useState({});

// llamado a la api
useEffect(() => {
    if(id_receta)
    {
        const getReceta = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id_receta}`;
            
            const resultado = await axios.get(url);

            setReceta(resultado.data.drinks[0]);
        }
        getReceta();
    }
    else return;
}, [id_receta])

    return (
        <ModalContext.Provider
            value={{
                receta_data,
                setReceta,
                setIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;