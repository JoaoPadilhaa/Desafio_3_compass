import { getProdutos } from "../../services/produtosService";
import { getProdutosDog } from "../../services/produtoDogService";
import { useState, useEffect } from "react";
import CardProduto from "../../components/cardproduto";
import CardDog from "../../components/CardDog/carddog";
import styles from "./teste.module.css";

interface Genero {
  id: number;
  descricao: string;
}

interface ProdutosCachorro {
  id: number;
  name: string;
  sku: string;
  genero: Genero;
  age: number;
  price: number;
}


interface Produto {
  id: number;
  name: string;
  peso: number;
}

function Teste() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    async function ListProdutos() {
      try {
        const dados = await getProdutos();
        setProdutos(dados.data);
      } catch (error) {
        setProdutos([]);
        console.error("Erro", error);
      }
    }
    ListProdutos();
  }, []);

  return (
    <div>
    <div className={styles.cardProdutoContainer}>
      <div className={styles.produtosContainer}>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} img={`/imgs/${produto.id}.jpg`} />
        ))}
      </div>
    </div>
    <CardDogao></CardDogao>
    </div>
  );
}

const CardDogao = () => {
  const [dogs, setDogs] = useState<ProdutosCachorro[]>([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const data = await getProdutosDog();
        setDogs(data.data);
      } catch (error) {
        console.error('Erro ao buscar cachorros:', error);
      }
    };

    fetchDogs();
  }, []);

   return (
    <div className={styles.cardProdutoContainer}>
      <div className={styles.produtosContainer}>
      {dogs.map((dog) => (
        <CardDog
          key={dog.id}
          cachorro={dog}
          img={`/imgsdog/${dog.id}.jpg`} // ou `dog.image` se vier do backend
        />
      ))}
      </div>
    </div>
  );
};




export default Teste;
