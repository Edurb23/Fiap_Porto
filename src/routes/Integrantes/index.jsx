import React, { useState } from "react";
import Cabecalho from "../../components/Cabecalho"
import Colaborador from "../../components/Colaborador";
import Rodape from '../../components/Rodape'
import './integrantes.css'

const Integrantes = () => {
    
 

    return(
        <body>
            <Cabecalho></Cabecalho>
           
           
             <Colaborador></Colaborador>

             <a className="repositorio" href="https://github.com/Edurb23/Fiap_Porto" target="_blank">Nosso Repositorio</a> 

             <Rodape></Rodape>
                
             

        </body>
    )
}

export default Integrantes 
