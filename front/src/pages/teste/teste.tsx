import { getProdutos } from "../../services/produtosService";
import { getProdutosDog } from "../../services/produtoDogService";
import { useState, useEffect } from "react";
import DogList from "../../components/DogList/DogList";
import CardDog from "../../components/CardDog/carddog";
import styles from "./teste.module.css";
import NavBar from "../../components/NavBar/navbar";


interface ProdutosCachorro {
  id: number;
  name: string;
  sku: string;
  fk_id_genero: number;
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
      <div><NavBar backgroundColor="white"></NavBar></div>
    
    <article className={styles.banner}>
        <div className={styles.contentBanner}>
          <h2>One More Friend</h2>
          <h3>Thousands More Fun!</h3>
          <p>Having a pet means you have more joy, a new friend, a happy person who will always be
             with you to have fun. We have 200+ different pets that can meet your needs!</p>
        </div>
        <div className={styles.buttonBanner}>
          <a href="#" className={styles.buttonOne}>View Intro</a>
          <a href="#" className={styles.buttonTwo}>Explore Now</a>
        </div>
      </article>

    <div className={styles.dogsAll}>
      <DogList />
      <CardDogao></CardDogao></div>

    
    </div>
  );
}

const CardDogao = () => {
  const [dogs, setDogs] = useState<ProdutosCachorro[]>([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const data = await getProdutosDog();
        setDogs(dogs);
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
