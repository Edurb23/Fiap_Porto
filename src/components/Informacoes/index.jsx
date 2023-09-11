import React from "react"
import './informacoes.css'

const Informacoes = () => {
    return(
    <>
         <section className="OWP">
                <a>Our Working Process</a>
                <p>nosso passso a passo de negócio </p>
            </section>

        <section className="cards">
            <div>
                <h1> 
                   
                    01 Consulta
                
                </h1>
            </div>
            <div > 
              <h1> 02 Pesquisa e desenvolvimento de estratégia</h1>
            </div>
            <div >
            <h1> 03 implementação</h1>  
            </div >
            <div >
            <h1> 04 monitoramento e otimização</h1>
            </div >
            <div >
            <h1> 05 Relatório e comunicação</h1>
            </div>
            <div >
            <h1> 06 Melhoria contínua</h1>
            </div>
        </section>
    </>
    )
}


export default Informacoes 