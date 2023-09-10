import React from "react"
import './colaborador.css'


const Colaborador = ({nome, descricao, redesocial, rm}) => {
    return(
        <div className="colaborador">
            <div className="cabecalho">
            <h4>Silvio Luiz Aranha Junior</h4>
            <h5>Aluno na fiap  rm550821</h5>
            <img src="/img/icons8-linkedin.svg" alt="Linkidin logo" />
            </div>
            <div className="rodape">
            
            <h5>olá sou o silvio Luiz, tenho 18 anos sou apaixonado por programação e estou no primeiro semestre da FIAP e quero aprender o maximo possivel</h5>
            </div>

        </div>
    )
}

export default Colaborador