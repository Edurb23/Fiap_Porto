import React from "react"
import "./home.css"
import Cabecalho from "../../components/Cabecalho"
import Conteudo  from "../../components/Conteudo"
import Rodape from "../../components/Rodape"

const Home = () => {
    return(
        <body>
          <Cabecalho></Cabecalho> 
           <Conteudo></Conteudo>
        </body>
    )
}  

export default Home