import React from "react";
import imagem from './img/400x4005.png';
import InfosUsuario from "./InfosUsuario"

const titulo = "Título do vídeo";

function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}

function CardVideo(){
    return(
        <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src={imagem} alt="" />
        <h4>{titulo}</h4>
        <InfosUsuario/>
        </div>
    )
}
export default CardVideo