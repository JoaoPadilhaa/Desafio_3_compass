import React from "react";
import styles from "./CardProduto.module.css"; // Importando o CSS como módulo

interface TipoDeProduto {
  id:number;
  name: string;
}

interface Produto {
  id: number;
  name: string;
  peso: number;
  price: number;
  tipoDeProduto: TipoDeProduto;
}

interface Props {
  produto: Produto;
  img: string;
}

const CardProduto: React.FC<Props> = ({ produto, img }) => {
  console.log(produto);
  return (
    <div className={styles.cardProduto}>
      <img src={`/imgs/${produto.id}.jpg`} className={styles.produtoImagem}/>
      <h3>{produto.name}</h3>
      <div className={styles.pesoProduct}>
        <p>Product: {produto.tipoDeProduto.name}</p>
        <p>Peso: {produto.peso} kg</p>
      </div>
      <p><strong>{produto.price}.000 VND</strong> </p>
    </div>
  );
};

export default CardProduto;
