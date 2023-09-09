import React from "react"
import "./cabecalho.css"

const Cabecalho = () => {
    return(
        <header className="cabecalho">
            <img src="/img/porto-seguro-novo-logo-444639E178-seeklogo.com.png" alt="LOGO PORTO SEGURO" />
            <nav>
                <a href="">Home</a>
                <a href="">Serviços</a>
                <a href="">Integrantes</a>
            </nav>
        </header>
    )
}

export default Cabecalho