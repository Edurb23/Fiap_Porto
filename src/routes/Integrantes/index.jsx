import React, { useState } from "react";
import Cabecalho from "../../components/Cabecalho"
import Colaborador from "../../components/Colaborador";
import Rodape from '../../components/Rodape'
import './integrantes.css'

const Integrantes = () => {
    
 

    return(
        <body>
            <Cabecalho></Cabecalho>
            <h1 className="titulo">Integrantes</h1>
           
             <Colaborador></Colaborador>

             <Rodape></Rodape>
                
             

        </body>
    )
}

export default Integrantes 
