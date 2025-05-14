// src/services/coresService.ts
import axios from "axios";

// URL da sua API de cores
const apiUrl = "http://localhost:3001/cor";

export async function getCores() {
  try {
    const response = await axios.get(apiUrl); // Faz a requisição para pegar as cores
    return response.data; // Retorna os dados das cores
  } catch (error) {
    console.error("Erro ao buscar cores:", error);
    throw error; // Lança o erro caso a requisição falhe
  }
}
