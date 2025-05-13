import React from "react";
import styles from "./carddog.module.css";

interface ProdutosCachorro {
    id: number;
    name: string;
    sku: string;
    fk_id_genero: number;
    age: number;
    price: number;
}

interface Props {
    cachorro: ProdutosCachorro;
    img: string;
}

const getGenero = (generoId: number | null | undefined): string => {
    if (generoId == null) return "Não informado";

    switch (generoId) {
        case 1:
            return "Feminino";
        case 2:
            return "Masculino";
        default:
            return `Id desconhecido: ${generoId}`;
    }
};

const CardDog: React.FC<Props> = ({cachorro, img}) => {
    console.log("cachorro recebido", cachorro);
    const generoDescricao = getGenero(cachorro.fk_id_genero); // Obtém a descrição do gênero
    return (
        <div className={styles.cardProduto}>
            <img src={`/imgsdog/${cachorro.id}.jpg`} className={styles.produtoImagem} />
            <h3>{cachorro.sku} - {cachorro.name}</h3>
            <div className={styles.pesoProduct}>
                <p>Gene: {generoDescricao} · Age: {cachorro.age} months</p>
                
            </div>
               <div className={styles.prices}> <p><strong>{cachorro.price}00.000 VND</strong></p></div>
        </div>
    );
};

export default CardDog;