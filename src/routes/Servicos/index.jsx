import React from "react";
import Cabecalho from "../../components/Cabecalho";
import './servicos.css'

const Servicos = () => {
    return (
        <body>
            <Cabecalho></Cabecalho>
           <section className="conteudo">

            <h1>Serviços</h1>
            <p >
                Nosso serviço consiste em criar um ChatBot inteligente e de fácil entendimento, esse Chatbot ajudará na coleta de informações que serão fornecidas pelo cliente. Com essas informações será possível localizar o veículo do cliente e solicitar o melhor modal para a solução do problema.
            </p>

            <img src="/img/chatbot1.png" alt="Imagem de um exemplo de chatbot" />
            <img src="/img/chatbot2.png" alt="Imagem de um exemplo de chatbot" />
           </section>
        </body>
    )
}


export default Servicos