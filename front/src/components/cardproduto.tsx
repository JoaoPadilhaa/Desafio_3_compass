import React from "react";
import "./CardProduto.css"; // Importando o CSS externo

interface Produto {
  id: number;
  name: string;
  peso: number;
}

interface Props {
  produto: Produto;
  img: string;
}

const CardProduto: React.FC<Props> = ({ produto, img }) => {
  return (
    <div className="card-produto">
      <h3>{produto.name}</h3>
      <p><strong>ID:</strong> {produto.id}</p>
      <p><strong>Peso:</strong> {produto.peso} kg</p>
      <img src={img} className="produto-imagem"></img>
    </div>
  );
};

export default CardProduto;