import React from "react"
import { Link } from "react-router-dom"
import "./cabecalho.css"

const Cabecalho = () => {
    return(
        <header className="cabecalho">
            <img src="/img/porto-seguro-novo-logo-444639E178-seeklogo.com.png" alt="LOGO PORTO SEGURO" />
            <nav>
                
                <Link className="a" to ="/" >Home</Link>
                <Link className="a" to ="/servicos" >Serviços</Link>
                <Link className="a" to ="/integrantes" >Integrantes</Link>
                
            </nav>
        </header>
    )
}

export default Cabecalho