import React from "react";
import "./conteudo.css"

const Conteudo = () => {
    return(
        <>
        <section className="inicio">
        <h1>Somos a empresa jarvis e estamos aqui para ajudar com seu problema !
            <p>A Porto é uma holding brasileira fundada em 1945. A atuação da empresa se baseia em três verticais de negócios: Porto Seguros, Porto Saúde e Porto Seguro Bank.</p>
            <button>Site Porto</button>
        </h1>
        
       <img src="/img/Guincho_P-2-1-1.png" alt="" />
    
        </section>

        <section className="servicos">
            <a>serviços</a>
            <p>Nosso serviço é recolher dados do cliente para a otimização dos serviços da porto, nosso chatbot é de rápido e facil entendimento para todas as faixas etárias.  </p>
            <div>
                <h3>chatbot otimizado</h3>
                <img src="/img/chatIA.png" alt="" />
            </div>
            <div>
            <h3>como funciona nosso tabalho?</h3>
            <img src="/img/Guincho_P-2-1-1.png" alt="" />
            </div>
            <div>
            <h3>status modal de envio</h3>
            <img src="/img/looding.png" alt="" />
            </div>
        </section>

       

       
        </>
    )
}


export default Conteudo