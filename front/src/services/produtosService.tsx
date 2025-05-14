import axios from "axios"

const apiUrl =  "http://localhost:3001/produtos";

// Função para buscar todos os usuários
export async function getProdutos() {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
}
