import { getProdutos } from "../../services/produtosService";
import { useState, useEffect } from "react";
import CardProduto from "../../components/cardproduto";
import "./Teste.css"; // Importando CSS externo

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
      <h2>Bem-vindo à página Home!</h2>
      <div className="produtos-container">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} img={`/imgs/${produto.id}.jpg`} />
        ))}
      </div>
    </div>
  );
}

export default Teste;
