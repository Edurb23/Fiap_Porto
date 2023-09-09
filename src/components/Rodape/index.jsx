import React from "react"
import "./rodape.css"


const Rodape = () => {
    return(
        <section className="footer">
            <ul>
                <img src="./img/porto-seguro-novo-logo-444639E178-seeklogo.com.png" alt="Logo da porto" />
                <li>
                    <a>
                        Sobre nos
                    </a>
                </li>
                <li>
                    <a>
                        Serviços
                    </a>
                </li>
                <li>
                    <a>
                       Fale conosco:
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a>
                        Email: autocarsevicos@fiap.com.br
                    </a>
                </li>
                <li>
                    <a href="www.linkedin.com" target="_blank">
                       <img src="" alt="logo linkidn" />
                    </a>
                </li>
                <li>
                    <a href="www.facebook.com" target="_blank"> 
                        <img src="" alt="logo Facebook" />
                    </a>
                </li>
                <li>
                    <a href="www.X.com" target="_blank"> 
                        <img src="X" alt="Logo do Twitter" />
                    </a>
                </li>
            </ul>
        </section>
    )
}


export default Rodape