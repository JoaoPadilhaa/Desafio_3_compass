// DogList.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import DogFilter from "../DogFilter/DogFilter";
import type { FilterOptions } from "../DogFilter/DogFilter";
import { getCores } from "../../services/coresService";
import CardDog from "../CardDog/carddog";
import { getProdutosDog } from "../../services/produtoDogService";

interface ProdutosCachorro {
  id: number;
  name: string;
  sku: string;
  fk_id_genero: number;
  fk_id_cor: number;
  age: number;
  price: number;
}

interface Cor {
  id: number;
  nome: string;
}

const getGenero = (generoId: number | null | undefined): string => {
  if (generoId == null) return "Não informado";
  switch (generoId) {
    case 1:
      return "Female";
    case 2:
      return "Male";
    default:
      return `Id desconhecido: ${generoId}`;
  }
};

const DogList = () => {
  const [dogs, setDogs] = useState<ProdutosCachorro[]>([]);
  const [filteredDogs, setFilteredDogs] = useState<ProdutosCachorro[]>([]);
  const [cores, setCores] = useState<Cor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [dogsRes, coresRes] = await Promise.all([
        axios.get("http://localhost:3001/produtos-cachorro"), // ajuste a URL conforme sua API
        axios.get("http://localhost:3001/cor"),
      ]);
      console.log("Cores Recebidas: ", coresRes.data);
      setDogs(dogsRes.data);
      setFilteredDogs(dogsRes.data);
      setCores(coresRes.data);
    };
    fetchData();
  }, []);

  const handleFilterChange = (filters: FilterOptions) => {
    const filtered = dogs.filter((dog) => {
      const genero = getGenero(dog.fk_id_genero);
      const cor = cores.find((c) => c.id === dog.fk_id_cor)?.nome ?? "Desconhecido";

      return (
        (filters.gender.length === 0 || filters.gender.includes(genero)) &&
        (filters.colors.length === 0 || filters.colors.includes(cor)) &&
        dog.price >= filters.priceRange[0] &&
        dog.price <= filters.priceRange[1]
      );
    });

    setFilteredDogs(filtered);
  };

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <DogFilter onFilterChange={handleFilterChange} availableColors={cores.map(c => c.nome).filter((nome): nome is string => !!nome)} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", flex: 1 }}>
        {filteredDogs.map((dog) => (
          <CardDog key={dog.id} cachorro={dog} img={`/imgsdog/${dog.id}.jpg`} />
        ))}
      </div>
    </div>
  );
};

export default DogList;
