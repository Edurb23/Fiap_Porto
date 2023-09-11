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
            <div className="card-aberto" >
                <h1> 
                    01 Consulta
                    <p>tentamos filtrar as informações  do cliente para conseguir achar e localizar o cliente e seu problema com o veículo.</p>
                </h1>
            </div>
            <div className="card-fechado"> 
              <h1> 02 Pesquisa e desenvolvimento de estratégia</h1>
            </div>
            <div className="card-fechado">
            <h1> 03 implementação</h1>  
            </div >
            <div className="card-fechado">
            <h1> 04 monitoramento e otimização</h1>
            </div >
            <div className="card-fechado">
            <h1> 05 Relatório e comunicação</h1>
            </div>
            <div className="card-fechado">
            <h1> 06 Melhoria contínua</h1>
            </div>
        </section>
    </>
    )
}


export default Informacoes 