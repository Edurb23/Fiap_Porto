import React from "react"
import "./rodape.css"


const Rodape = () => {
    return(
       <>
   
       <section className="footer">
            <div className="conteudo-1">
            <ul>
                <img className="portologo" src="./img/porto-seguro-novo-logo-444639E178-seeklogo.com.png" alt="Logo da porto" />
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
                <li>
                    <a>
                        Email: autocarsevicos@fiap.com.br
                    </a>
                </li>
                <li>
                    <a>
                        Address: AV. paulista 5003
                    </a>
                </li>
            </ul>

            </div>

            <div  className="conteudo-2">

            <ul>
                <li>
                    <a href="https://br.linkedin.com/" target="_blank">
                       <img className="socialicons" src="/img/icons8-linkedin.png" alt="logo linkidn" />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/?locale=pt_BR" target="_blank"> 
                        <img className="socialicons" src="/img/facebook.png" alt="logo Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/" target="_blank"> 
                        <img className="socialicons" src="/img/twitter.png" alt="Logo do Twitter" />
                    </a>
                </li>
            </ul>
            </div>
    
        </section>
            </>
    )
}


export default Rodape