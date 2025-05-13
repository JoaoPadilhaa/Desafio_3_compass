import React from "react";
import NavBar from "../../components/NavBar/navbar";
import HeroSection from "../../components/HeroSection/herosection";
import CardDog from "../../components/CardDog/carddog";
import { getProdutosDog } from "../../services/produtoDogService";
import { useState, useEffect } from "react";
import styles from "./home.module.css";

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


const Home: React.FC = () => {
  const [dogs, setDogs] = useState<ProdutosCachorro[]>([]);

  useEffect(() => {
    async function carregarDogs() {
      try {
        const response = await getProdutosDog();
        setDogs(response.data);
      } catch (error) {
        console.error("Erro ao buscar cachorros:", error);
      }
    }

    carregarDogs();
  }, []);

  return (
    <div>
      <main>  
      <NavBar />
      <HeroSection>

      </HeroSection>
      </main>
      <section className={styles.containerDogs}>
        {dogs.map((dog) => (
          <CardDog
            key={dog.id}
            cachorro={dog}
            img={`/imgsdog/${dog.id}.jpg`}
          />
        ))}
      </section>
    </div>
  )
}

export default Home;